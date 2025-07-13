using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PayStack.Net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Cancoly.Application.Features
{
    public class PaymentService
    {
        private readonly IConfiguration _configuration;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IHttpContextAccessor _accessor;
        private readonly UserManager<ApplicationUser> _userManager;
        
        public PaymentService(IConfiguration configuration, 
            IUnitOfWork unitOfWork,
             UserManager<ApplicationUser> userManager,
             IHttpContextAccessor accessor
            )
        {
            _configuration = configuration;
            _unitOfWork = unitOfWork;
            _userManager = userManager;
            _accessor = accessor;
        }
        
        public string MakePayment(double amount, string email)
        {
            var _api = new PayStackApi(_configuration.GetConnectionString("PayStackSecret"));

            var result = _api.Transactions.Initialize(email, (int)amount, Guid.NewGuid().ToString("N"), false, "NGN");

            return result.Data.AuthorizationUrl;
        }

        public async Task<bool> CallbackVerifyPayment(string reference)
        {
            try
            {
                var _api = new PayStackApi(_configuration.GetConnectionString("PayStackSecret"));

                var verification = _api.Transactions.Verify(reference);
                
                if (verification.Status == false)
                {
                    return false;
                }
                else
                {
                    var transaction = await _unitOfWork.TransactionRepository.Query().Where(x => x.ReferenceId == reference).FirstAsync();

                    if (transaction != null)
                    {
                        return false;
                    }

                    var type = _accessor.HttpContext.Session.GetString("type");

                    var user = await _userManager.FindByEmailAsync(verification.Data.Customer.Email);

                    var input = new Transaction
                    {
                        UserId = user.Id,
                        Service = type,
                        Email = verification.Data.Customer.Email,
                        IPAddress = verification.Data.IpAddress,
                        AuthorizationCode = verification.Data.Authorization.AuthorizationCode,
                        CustomerCode = verification.Data.Customer.CustomerCode,
                        ReferenceId = verification.Data.Reference,
                        Currency = verification.Data.Currency,
                        Channel = verification.Data.Channel,
                        Status = verification.Data.Status,
                        Amount = (verification.Data.Amount / 100),
                        Charge = double.Parse(verification.Data.Fees.ToString()),
                        MetaData = JsonSerializer.Serialize(verification.Data)
                    };

                    _unitOfWork.TransactionRepository.Create(input);
                    await _unitOfWork.Save();

                    var updates = new List<Notification>();

                    updates.Add(new Notification
                    {
                        UserId = user.Id,
                        Title = "Payment Successful",
                        Message = "Your payment have been successfully confirmed, hence your account is now upgraded.",
                        MailBody = "<p>We noticed a new payment to upgrade your Cancoly account. If this was you, no further action is required.</p>\r\n            <p><strong>Details of the login:</strong></p>\r\n            <ul>\r\n                <li><strong>IP Address:</strong> {{ip_address}}</li>\r\n                <li><strong>Location:</strong> {{location}}</li>\r\n                <li><strong>Time:</strong> {{login_time}}</li>\r\n            </ul>\r\n            <p>If this wasn't you, please <a href=\"{{reset_password_link}}\" class=\"button\">Reset Your Password</a> immediately to secure your account.</p>\r\n            "

                    });
                    updates.Add(new Notification
                    {
                        Title = "New Payment Alert",
                        Message = $"A new payment have been successfully confirmed from {user.Email} ."
                    });

                    //Notify User & Admin
                    _unitOfWork.NotificationRepository.BulkCreate(updates);
                    await _unitOfWork.Save();
                     
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return true;
        }


    }
}
