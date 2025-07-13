#nullable disable

using System;
using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.WebUtilities;

namespace Cancoly.Areas.Identity.Pages.Account
{
    public class ForgotPasswordModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IUnitOfWork _unitOfWork;
         
        public ForgotPasswordModel(IUnitOfWork unitOfWork,UserManager<ApplicationUser> userManager)
        {
            _unitOfWork = unitOfWork;
            _userManager = userManager;
            
        }

        [BindProperty]
        public InputModel Input { get; set; }

       public class InputModel
        {
            [Required]
            [EmailAddress]
            public string Email { get; set; }
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(Input.Email);
                if (user == null || !(await _userManager.IsEmailConfirmedAsync(user)))
                {
                    TempData["AlertSubject"] = "Password Reset Successfully";
                    TempData["AlertMessage"] = "Your password has been reset successfully";
                    TempData["AlertType"] = "success";

                    return Redirect("/account-login");
                }

                var code = await _userManager.GeneratePasswordResetTokenAsync(user);
                code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
                var callbackUrl = Url.Page(
                    "/Account/ResetPassword",
                    pageHandler: null,
                    values: new { area = "Identity", code },
                    protocol: Request.Scheme);

                _unitOfWork.NotificationRepository.Create(new Notification
                {
                    UserId = user.Id,
                    Title = "Reset Password",
                    Message = "We received a request to reset your password for your Cancoly account.",
                    MailBody = "<p>We received a request to reset your password for your Cancoly account. Here is your new password:</p>\r\n            <p style=\"font-size: 18px; font-weight: bold; color: #141b8d;\">{{new_password}}</p>\r\n            <p>We strongly recommend that you log in and change this password immediately to keep your account secure.</p>\r\n            <p><a href=\"{{login_link}}\" class=\"button\">Log In to Your Account</a></p>\r\n            "
                });
                await _unitOfWork.Save();

                TempData["AlertSubject"] = "Password Reset Successfully";
                TempData["AlertMessage"] = "Your password has been reset successfully";
                TempData["AlertType"] = "success";

                return Redirect("/account-login");
            }

            return Page();
        }
    }
}
