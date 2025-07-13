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
    public class NotificationsModel : PageModel
    {
        public readonly IUnitOfWork _unitOfWork;
        public readonly UserManager<ApplicationUser> _userManager;
       
        public List<Notification> Notifications { get; set; }

        public NotificationsModel(IUnitOfWork unitOfWork, UserManager<ApplicationUser> userManager)
        {
            _unitOfWork = unitOfWork;
            _userManager = userManager;
        }


        public async Task OnGetAsync()
        {
            try
            {
                var user = await _userManager.FindByEmailAsync(User.Identity.Name);
                Notifications = await _unitOfWork.NotificationRepository.Query().Where(x=> x.UserId ==  user.Id && x.IsSeen == false).OrderByDescending(x=> x.DateCreated).ToListAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }
        public async Task<IActionResult> OnPostAsync()
        {
            try
            {
                var user = await _userManager.FindByEmailAsync(User.Identity.Name);

                await _unitOfWork.NotificationRepository.Query()
                    .Where(x=> x.UserId ==  user.Id && x.IsSeen == false)
                    .ExecuteUpdateAsync(update => update.SetProperty(u => u.IsSeen, u => true));
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            return Redirect("/user-notifications");
        }
    }
}
