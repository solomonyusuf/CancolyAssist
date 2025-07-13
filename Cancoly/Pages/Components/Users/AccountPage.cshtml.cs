using Cancoly.Application.Features;
using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace Cancoly.Pages.Components.Users
{
    [Authorize]
    public class AccountPageModel : PageModel
    {
        public readonly IUnitOfWork _unitOfWork;
        public readonly UploadFileService _uploadService;
        public readonly UserManager<ApplicationUser> _manager;
       
        public AccountPageModel(UploadFileService uploadService, IUnitOfWork unitOfWork, UserManager<ApplicationUser> manager)
        {
            _uploadService = uploadService;
            _unitOfWork = unitOfWork;
            _manager = manager;
        }

        [BindProperty]
        public ApplicationUser AppUser { get; set; }


        public async Task OnGetAsync()
        {
            try
            {
                AppUser = await _manager.FindByNameAsync(User.Identity.Name);

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }


        [MethodImpl(MethodImplOptions.NoOptimization)]
        public async Task<IActionResult> OnPostAsync()
        {
            try
            {
                AppUser = await _manager.FindByNameAsync(User.Identity.Name);

                if (Request.Form["type"] == "acct")
                {
                    
                    if(Request.Form.Files.Any())
                    {
                        var image = Request.Form.Files[0];

                        if (image != null)
                        {
                            if (image.Length > 4145728)
                            {
                                TempData["AlertSubject"] = $"Image Size Exceeded";
                                TempData["AlertMessage"] = "The accepted image size is a max of 3mb, allowed files are jpg, png, jpeg ";
                                TempData["AlertType"] = "warning";

                                return Redirect("/account-profile");
                            }
                            AppUser.Image = _uploadService.UploadFile(new List<IFormFile> { image }).Result[0];
                        }

                    }
                    if (AppUser.Image == null)
                    {
                        AppUser.Image = "assets/img/user-icon.png";
                    }

                    AppUser.FirstName = Request.Form["first_name"];
                    AppUser.LastName = Request.Form["last_name"];
                    AppUser.PhoneNumber = Request.Form["phone_no"];

                    await _manager.UpdateAsync(AppUser);

                    TempData["AlertSubject"] = $"Account Updated";
                    TempData["AlertMessage"] = "Account update operation was successful!";
                    TempData["AlertType"] = "success";

                }
                else
                {
                    await _manager.DeleteAsync(AppUser);

                    TempData["AlertSubject"] = $"Account Deactivated";
                    TempData["AlertMessage"] = "Account deativation operation was successful!";
                    TempData["AlertType"] = "success";

                    return Redirect("/account-logout");
                }
             
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            return Page();
        }
    }
}
