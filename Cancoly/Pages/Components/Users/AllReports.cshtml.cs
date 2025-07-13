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
    public class AllReportsModel : PageModel
    {
        private IUnitOfWork _unitOfWork;
        private UploadFileService _fileService;
        private UserManager<ApplicationUser> _userManager;

        public AllReportsModel(
            UploadFileService fileService,
             IUnitOfWork unitOfWork,
             UserManager<ApplicationUser> userManager
            )
        {
            _fileService = fileService;
            _unitOfWork = unitOfWork;
            _userManager = userManager;
        }

        public List<BrainScan> brainScans { get; set; }

        public async Task OnGetAsync([FromQuery] string Search)
        {
            try
            {
                var user = await _userManager.FindByEmailAsync(User.Identity.Name);

                brainScans = await _unitOfWork.BrainScanRepository.Query()
                                              .Where(x => x.UserId == user.Id)
                                              .ToListAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }

    }
}
