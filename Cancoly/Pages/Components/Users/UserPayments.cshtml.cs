using Cancoly.Application.Features;
using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace Cancoly.Pages.Components.Users
{
    [Authorize]
    public class UserPaymentsModel : PageModel
    {
        private IUnitOfWork _unitOfWork;
        private PaymentService _paymentService;
        private UserManager<ApplicationUser> _userManager;

        public UserPaymentsModel(
            IUnitOfWork unitOfWork,
             UserManager<ApplicationUser> userManager,
             PaymentService paymentService
            )
        {
            _unitOfWork = unitOfWork;
            _userManager = userManager;
            _paymentService = paymentService;
        }

        public List<Transaction> Transactions { get; set; } 

        public async Task OnGet()
        {
            Transactions = await _unitOfWork.TransactionRepository.Query()
                                            .Where(x => x.Email == User.Identity.Name)
                                            .ToListAsync();
        }
    }
}
