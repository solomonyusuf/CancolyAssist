using Cancoly.Application.Features;
using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Cancoly.Pages.Components.Users
{
    [Authorize]
    public class UserPlanPageModel : PageModel
    {
        private IUnitOfWork _unitOfWork;
        private PaymentService _paymentService;
        private UserManager<ApplicationUser> _userManager;

        public UserPlanPageModel(
            IUnitOfWork unitOfWork,
             UserManager<ApplicationUser> userManager,
             PaymentService paymentService
            )
        {
            _unitOfWork = unitOfWork;
            _userManager = userManager;
            _paymentService = paymentService;
        }
        public async Task OnGet([FromQuery(Name = "reference")] string reference)
        {
            if(!string.IsNullOrEmpty(reference))
            {
                await Task.Run(async () =>
                {
                    var payment = await _paymentService.CallbackVerifyPayment(reference);

                    if (payment == true)
                    {
                        var type = HttpContext.Session.GetString("type");
                        var user = await _userManager.FindByEmailAsync(User.Identity.Name);

                        var roles = await _userManager.GetRolesAsync(user);

                        await _userManager.AddToRoleAsync(user, type);

                        await _userManager.RemoveFromRoleAsync(user, roles[0]);

                        TempData["AlertSubject"] = "Payment Successful";
                        TempData["AlertMessage"] = "Your payment was confirmed successfuly and your account has been upgraded, reach out to our customer service if you have any challenge.";
                        TempData["AlertType"] = "success";

                    }
                    else
                    {
                        TempData["AlertSubject"] = "Payment Issue";
                        TempData["AlertMessage"] = "Sorry there was an issue confirming payment, reach out to our customer service or try again.";
                        TempData["AlertType"] = "warning";
                    }
                });
                
            }
        }

        public async Task<IActionResult> OnPost()
        {
            try
            {
                if (User.IsInRole("Professional") || User.IsInRole("Business"))
                {
                    TempData["AlertSubject"] = "Active Plan Already";
                    TempData["AlertMessage"] = "Sorry there is already an active plan on your account , reach out to our customer service or try again.";
                    TempData["AlertType"] = "warning";

                    return Redirect("/user-plans");
                }

                var type = Request.Form["type"];
                
                HttpContext.Session.SetString("type", type);

                var amount = 0.0;

                if (type == "Professional")
                    amount = 10000;

                if (type == "Business")
                    amount = 30000;

                var path = _paymentService.MakePayment((amount * 100), User.Identity.Name);

                if(string.IsNullOrEmpty(path))
                {
                    TempData["AlertSubject"] = "Payment Downtime";
                    TempData["AlertMessage"] = "Sorry there was an issue on payment service, reach out to our customer service or try again.";
                    TempData["AlertType"] = "warning";

                    return Redirect("/user-plans");
                }

                return Redirect(path);
            }
            catch (Exception ex) 
            {
                Console.WriteLine(ex);
            }

            return Redirect("/user-plans");
        }
    }
}
