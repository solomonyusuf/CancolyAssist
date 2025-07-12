using Cancoly.Application;
using Cancoly.Domain.Resource.Authentication;
using Cancoly.Application.Features;
using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using YamlDotNet.Core.Tokens;

namespace CancolyAPI.Controllers
{
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        public readonly IUnitOfWork _unitOfWork;
        public readonly EmailService _emailSender;
        public readonly IConfiguration _configuration;
        public readonly IHttpContextAccessor _contextAccessor;
        public readonly ILogger<AuthenticationController> _logger;
        public readonly UserManager<ApplicationUser> _userManager;

        public AuthenticationController(
            IUnitOfWork unitOfWork,
            ILogger<AuthenticationController> logger, 
            IHttpContextAccessor contextAccessor,
            IConfiguration configuration,
            UserManager<ApplicationUser> userManager,
            EmailService emailSender)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
            _contextAccessor = contextAccessor;
            _configuration = configuration;
            _userManager = userManager;
            _emailSender = emailSender;
        }

        
        [HttpPost]
        [Route($"v{GlobalVersion.version}/" + "api/account/check-email-existence/{Email}")]
        [ProducesResponseType(typeof(string), 200)]
        [ProducesResponseType(typeof(string), 400)]
        public async Task<IActionResult> CheckUserExistence([FromRoute] string Email)
        {
            var result = await _unitOfWork.UserRepository.Query()
                .Where(x => x.Email.ToLower().Equals(Email.ToLower()))
                .FirstOrDefaultAsync();

            if (result == null)
            {
                return Ok("Valid Email");
            }

            return BadRequest("Invalid EMail");
        }


      
        [HttpGet]
        [Route($"v{GlobalVersion.version}/" + "api/account-organizations")]
        [ProducesResponseType(typeof(List<Organization>), 200)]
        [ProducesResponseType(typeof(string), 400)]
        public async Task<IActionResult> GetOrganizations()
        {
            var result = await _unitOfWork.OrganizationRepository.Query()
                                .ToListAsync();

            return Ok(result);
        }

       
        [HttpPost]
        [Route($"v{GlobalVersion.version}/" + "api/account-register")]
        [ProducesResponseType(typeof(string), 200)]
        [ProducesResponseType(typeof(string), 400)]
        public async Task<IActionResult> RegisterAccount([FromBody] RegisterUserResource registerUser)
        {
            var query = _unitOfWork.UserRepository.FindByMail(registerUser.Email);

            if (query != null)
            {
                return BadRequest("Email Exist Already");
            }

            var user = new ApplicationUser
            {
                UserName = registerUser.Email,
                Email = registerUser.Email,
                OrganizationId = registerUser.OrganizationId,
            };

            var result = await _unitOfWork.UserRepository.Create(user, registerUser.Password);

            await _unitOfWork.UserRepository.AddToRole(user, "User");

            var body = $@"
             <div class=""email-body"">
                <h2>Welcome to Cancoly!</h2>
                <p>Thank you for joining Cancoly. Our platform empowers radiologists with advanced tumor detection tools, helping to enhance diagnostic accuracy and improve patient outcomes.</p>
                <p>Click the button below to verify your email and start utilizing our AI-powered tumor detection platform:</p>
                <p style=""text-align: center;"">
                    <a href=""#"" style=""display: inline-block; padding: 10px 20px; background-color: #141b8d; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;"">Verify Email</a>
                </p>
                <p>If you have any questions or need assistance, feel free to <a href=""#"">contact us</a>.</p>
                <p>Best regards,<br>The Cancoly Team</p>
            </div>";

            await Task.WhenAll(_emailSender.SendEmailAsync(registerUser.Email, "Cancoly Sign Up", body, user));

            return Ok("User Created Successfully, Check Your Mail To Proceed");
        }

        
        [HttpPost]
        [Route($"v{GlobalVersion.version}/" + "api/account-login")]
        [ProducesResponseType(typeof(string), 400)]
        public async Task<IActionResult> LoginAccount([FromBody] LoginResource loginUser)
        {
            var access = new AccessResponseResource();

            var user = await _unitOfWork.UserRepository.FindByMail(loginUser.Email);

            if (user == null)
            {
                return BadRequest("Invalid Credentials");
            }

            var result = await _unitOfWork.UserRepository.CheckPassword(user, loginUser.Password);

            if (result)
            {
                await Task.WhenAll(
                     Task.Run(async () =>
                    {
                        user.Organization = await _unitOfWork.OrganizationRepository.Get(loginUser.OrganizationId);

                        var userRoles = await _unitOfWork.UserRepository.GetRoles(user);

                        var authClaims = new List<Claim>
                        {
                            new Claim(ClaimTypes.Name, user.UserName),
                            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        };

                        foreach (var userRole in userRoles)
                        {
                            authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                        }

                        var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                        var token = new JwtSecurityToken(
                            issuer: _configuration["JWT:ValidIssuer"],
                            audience: _configuration["JWT:ValidAudience"],
                            expires: DateTime.Now.AddHours(72),
                            claims: authClaims,
                            signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                            );

                        access = new AccessResponseResource
                        {
                            AccessToken = new JwtSecurityTokenHandler().WriteToken(token),
                            Expiration = token.ValidTo,
                            Role = userRoles[0],
                            User = new UserResource
                            {
                                Id = user.Id,
                                Image = user.Image,
                                Email = user.Email,
                                FirstName = user.FirstName,
                                LastName = user.LastName,
                                OrganizationId = user.OrganizationId
                            },
                            Organization = user.Organization.Title,
                            TwoFactor = user.TwoFactorEnabled
                        };
                        _logger.LogInformation("User JWT token created successfully");
                    }),
                     Task.Run(async () =>
                     {
                         string nigerianTime = TimeZoneInfo.ConvertTimeBySystemTimeZoneId(DateTime.UtcNow, "W. Central Africa Standard Time").ToString("dddd, dd MMMM yyyy HH:mm:ss");
                         var body = $@"
                            <div class=""email-body"">
                                <h2>New Login Notification</h2>
                                <p>Dear User,</p>
                                <p>We detected a new login to your Cancoly account:</p>
                                <p style=""font-weight: bold; font-size: 16px;"">{nigerianTime} (Nigerian Time)</p>
    
                                <p>If this was you, no further action is required.</p>
    
                                <p>If you did not initiate this login, please <a href=""#"" style=""color: #141b8d; font-weight: bold;"">reset your password</a> immediately to secure your account.</p>
    
                                <p>Best regards,<br>The Cancoly Team</p>
                            </div>";
                         await _emailSender.SendEmailAsync(loginUser.Email, "Cancoly Sign In", body, user);
                     })
                    );

                return Ok(access);
            }

            return BadRequest();
        }

        
        [HttpPost]
        [Route($"v{GlobalVersion.version}/" + "api/account-reset")]
        [ProducesResponseType(typeof(string), 200)]
        [ProducesResponseType(typeof(string), 400)]
        public async Task<IActionResult> ResetAccount([FromBody] EmailResource resetUser)
        {
            var user = await _unitOfWork.UserRepository.FindByMail(resetUser.Email);

            if (user == null)
            {
                return BadRequest("User Not Found");
            }
            await Task.WhenAll(
                Task.Run(async () =>
                {
                    string nigerianTime = TimeZoneInfo.ConvertTimeBySystemTimeZoneId(DateTime.UtcNow, "W. Central Africa Standard Time").ToString("dddd, dd MMMM yyyy HH:mm:ss");

                    string resetPasswordLink = "";

                    var body = $@"
                    <div class=""email-body"">
                        <h2>Reset Your Password</h2>
                        <p>We received a request to reset the password for your account. If you did not make this request, you can ignore this email.</p>
                        <p style=""text-align: center;"">
                            <a href=""{resetPasswordLink}"" target=""_blank"">Reset Password</a>
                        </p>
                        <p>This link will expire in 10 minutes for security reasons.</p>
                        <p>Time of request: <strong>{nigerianTime} (Nigerian Time)</strong></p>
                        <p>If you need further assistance, please <a href="""">contact us</a>.</p>
                        <p>Thank you,<br>The Cancoly Team</p>
                    </div>";
                    await _emailSender.SendEmailAsync(user.Email, "Cancoly Reset Password", body, user);
                }),
                Task.Run(async () =>
                {
                    string nigerianTime = TimeZoneInfo.ConvertTimeBySystemTimeZoneId(DateTime.UtcNow, "W. Central Africa Standard Time").ToString("dddd, dd MMMM yyyy HH:mm:ss");

                    string resetToken = await _userManager.GeneratePasswordResetTokenAsync(user);

                    var random = new Random();

                    string token = random.Next(999999).ToString();

                    _contextAccessor.HttpContext.Session.SetString(token, resetToken);

                    var body = $@"
                        <div class=""email-body"">
                        <h2>Reset Your Password</h2>
                        <p>We received a request to reset the password for your account. Use the token below to reset your password. If you did not make this request, you can ignore this email.</p>

                        <div style=""display: flex; align-items: center; justify-content: center; gap: 10px; background: #f9f9f9; padding: 10px; border: 1px solid #ddd; border-radius: 5px; width: fit-content; margin: auto;"">
                            <span id=""resetToken"" style=""font-size: 18px; font-weight: bold; color: #141b8d;"">{token}</span>
                            <button onclick=""copyToken()"" style=""background: none; border: none; cursor: pointer;"">
                                <i class=""fa-solid fa-copy"" style=""color: #141b8d; font-size: 18px;""></i>
                            </button>
                        </div>

                        <p>This token will expire in 24 hours for security reasons.</p>
                        <p>Time of request: <strong>{nigerianTime} (Nigerian Time)</strong></p>
                        <p>If you need further assistance, please <a href=""#"" style=""color: #141b8d; font-weight: bold;"">contact us</a>.</p>

                        <p>Thank you,<br>The Cancoly Team</p>

                        <script>
                            function copyToken() {{
                                var tokenText = document.getElementById(""resetToken"").innerText;
                                navigator.clipboard.writeText(tokenText).then(function() {{
                                    alert(""Token copied to clipboard!"");
                                }}).catch(function(err) {{
                                    console.error(""Error copying token: "", err);
                                }});
                            }}
                        </script>
                    </div>
";

                    await _emailSender.SendEmailAsync(user.Email, "Cancoly Reset Token", body, user);
                }) 
            );

            return Ok("Reset Mail & Token Sent");
        }


       
        [HttpGet]
        [Route($"v{GlobalVersion.version}/" + "api/account-refresh-token-{UserID}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [ProducesResponseType(typeof(string), 200)]
        [ProducesResponseType(typeof(string), 400)]
        public async Task<IActionResult> RefreshToken([FromRoute] string UserID)
        {
            var user = await _unitOfWork.UserRepository.FindOrDefault(UserID);

            if (user == null)
            {
                return BadRequest("User Not Found");
            }
            var userRoles = await _unitOfWork.UserRepository.GetRoles(user);

            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            foreach (var userRole in userRoles)
            {
                authClaims.Add(new Claim(ClaimTypes.Role, userRole));
            }

            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddHours(72),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

            return Ok(token.ToString());

        }

        
        [HttpPost]
        [Authorize]
        [Route($"v{GlobalVersion.version}/" + "api/account-change-password-{UserID}")]
        [ProducesResponseType(typeof(string), 200)]
        [ProducesResponseType(typeof(string), 400)]
        public async Task<IActionResult> RecoverAccount([FromRoute] string UserID, [FromBody] ChangePasswordResource recoverUser)
        {
            var user = await _userManager.FindByIdAsync(UserID);

            if (user == null)
            {
                return BadRequest("User Not Found");
            }

            await _userManager.ChangePasswordAsync(user, recoverUser.OldPassword, recoverUser.NewPassword);

            await Task.Run(async () =>
            {
                

                string nigerianTime = TimeZoneInfo.ConvertTimeBySystemTimeZoneId(DateTime.UtcNow, "W. Central Africa Standard Time").ToString("dddd, dd MMMM yyyy HH:mm:ss");

                var body = $@"
                <div class=""email-body"">
                    <h2>Your Password Has Been Changed</h2>
                    <p>Hello,</p>
                    <p>We wanted to let you know that your Cancoly account password was successfully updated on:</p>
                    <p style=""text-align: center; font-weight: bold;"">{nigerianTime} (Nigerian Time)</p>
                    <p>If you made this change, no further action is needed.</p>
                    <p>However, if you did not authorize this change, please <a href="""">secure your account</a> immediately by resetting your password and reviewing your account activity.</p>
                    <p>If you have any questions or need help, feel free to <a href="""">contact us</a>.</p>
                    <p>Thank you,<br>The Cancoly Team</p>
                </div>";

                await _emailSender.SendEmailAsync(user.Email, "Password Update", body, user);

            });

            return Ok("Account Updated Successfully");
        }
    
        
        [HttpPost]
        [Route($"v{GlobalVersion.version}/" + "api/account-reset-password-{UserID}")]
        [ProducesResponseType(typeof(string), 200)]
        [ProducesResponseType(typeof(string), 400)]
        public async Task<IActionResult> ResetPasswordAccount([FromRoute] string UserID, [FromBody] ResetPasswordResource resetPassword)
        {
            var user = await _userManager.FindByIdAsync(UserID);

            if (user == null)
            {
                return BadRequest("User Not Found");
            }
            
            var resetToken = _contextAccessor.HttpContext.Session.GetString(resetPassword.ResetToken);

            if(string.IsNullOrEmpty(resetToken))
            {
                return BadRequest("Invalid or expired token");
            }

            await Task.Run(async () =>
            {
                
                await _userManager.ResetPasswordAsync(user, resetToken, resetPassword.Password);

                string nigerianTime = TimeZoneInfo.ConvertTimeBySystemTimeZoneId(DateTime.UtcNow, "W. Central Africa Standard Time").ToString("dddd, dd MMMM yyyy HH:mm:ss");

                var body = $@"
                <div class=""email-body"">
                    <h2>Account Reset</h2>
                    <p>Hello,</p>
                    <p>We wanted to let you know that your Cancoly account password was successfully updated on:</p>
                    <p style=""text-align: center; font-weight: bold;"">{{nigerianTime}} (Nigerian Time)</p>
                    <p>If you made this change, no further action is needed.</p>
                    <p>However, if you did not authorize this change, please <a href=""#"">secure your account</a> immediately by resetting your password and reviewing your account activity.</p>
                    <p>If you have any questions or need help, feel free to <a href=""#"">contact us</a>.</p>
                    <p>Thank you,<br>The Cancoly Team</p>
                </div>";

                await _emailSender.SendEmailAsync(user.Email, "Account Reset", body, user);

            });

            return Ok("Account Updated Successfully");
        }
    
    }
}
