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
    public class UserDashboardModel : PageModel
    {
        private IUnitOfWork _unitOfWork;
        private UserManager<ApplicationUser> _userManager;

        public UserDashboardModel(
            IUnitOfWork unitOfWork,
             UserManager<ApplicationUser> userManager
            )
        {
            _unitOfWork = unitOfWork;
            _userManager = userManager;
        }

        public double scan { get; set; }

        public double scan_percent { get; set; }
        
        public double quota { get; set; }

        public double quota_percent { get; set; }
        
        public double balance { get; set; }

        public double balance_percent { get; set; }
        
        public List<Transaction> Transactions { get; set; }

        public async Task OnGetAsync([FromQuery] string Search)
        {
            try
            {
                await Task.Run(async () =>
                {
                    double percent = 100;

                    if (User.IsInRole("Professional"))
                        percent = 10000;
                     
                    var user = await _userManager.FindByEmailAsync(User.Identity.Name);

                    scan = await _unitOfWork.BrainScanRepository.Query()
                                                  .Where(x => x.UserId == user.Id)
                                                  .CountAsync();

                    scan_percent = await _unitOfWork.BrainScanRepository.Query()
                                                  .Where(x => x.UserId == user.Id && x.DateCreated > DateTimeOffset.Now.AddDays(-7))
                                                  .CountAsync();
                    
                    quota = await _unitOfWork.BrainScanRepository.Query()
                                                 .Where(x => x.DateCreated.Month == DateTimeOffset.Now.Month && x.UserId == user.Id)
                                                 .CountAsync();

                    Transactions = await _unitOfWork.TransactionRepository.Query()
                                                    .Where(x => x.UserId == user.Id)
                                                    .OrderByDescending(x => x.DateCreated)
                                                    .Take(10)
                                                    .ToListAsync();

                    balance = await _unitOfWork.TransactionRepository.Query()
                                                .Where(x => x.UserId == user.Id)
                                                .Select(x => x.Amount)
                                                .SumAsync();

                    var weekly =  await _unitOfWork.TransactionRepository.Query()
                                                .Where(x => x.UserId == user.Id && x.DateCreated.Date > DateTimeOffset.Now.AddDays(-7))
                                                .Select(x => x.Amount)
                                                .SumAsync();

                    balance_percent = ((weekly / balance) * 100);
                    quota_percent = ((quota / percent) * 100);
                });
                
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }

    }
}
