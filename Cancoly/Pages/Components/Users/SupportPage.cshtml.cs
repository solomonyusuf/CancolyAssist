using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace Cancoly.Pages.Components.Users
{
    [Authorize]
    public class SupportModel : PageModel
    {
         


        public async Task OnGetAsync()
        {
            try
            {
               
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }
    }
}
