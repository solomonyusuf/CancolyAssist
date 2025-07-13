using Cancoly.Domain.Entities;
using Microsoft.AspNetCore.Identity;
 

namespace Cancoly.Persistence.Seeder
{
    public class UserSeeder
    {
        public static void SeedUsers(UserManager<ApplicationUser> userManager)
        {

            try
            {
                if (userManager.FindByNameAsync
                 ("olafire03@gmail.com").Result == null)
                {
                    var user = new ApplicationUser();
                    user.Image = "assets/img/user-icon.png";
                    user.UserName = "olafire03@gmail.com";
                    user.FirstName = "Developer";
                    user.LastName = "Solomon";
                    user.Email = "olafire03@gmail.com";
                    user.EmailConfirmed = true;
                    user.LockoutEnabled = false;
                    IdentityResult result = userManager.CreateAsync
                    (user, "Cancoly12!").Result;

                    if (result.Succeeded)
                    {
                        userManager.AddToRoleAsync(user, "Admin").Wait();
                    }
                }
                
                if (userManager.FindByNameAsync
                 ("admin@cancoly.com").Result == null)
                {
                    var user = new ApplicationUser();
                    user.Image = "assets/img/user-icon.png";
                    user.UserName = "admin@cancoly.com";
                    user.FirstName = "Nifemi";
                    user.LastName = "Ade";
                    user.Email = "admin@cancoly.com";
                    user.EmailConfirmed = true;
                    user.LockoutEnabled = false;
                    IdentityResult result = userManager.CreateAsync
                    (user, "Cancoly12!").Result;

                    if (result.Succeeded)
                    {
                        userManager.AddToRoleAsync(user, "Admin").Wait();
                    }
                }


                if (userManager.FindByNameAsync
                       ("user@cancoly.com").Result == null)
                {
                    var user = new ApplicationUser();
                    user.Image = "assets/img/user-icon.png";
                    user.UserName = "user@cancoly.com";
                    user.FirstName = "Femi";
                    user.LastName = "Babs";
                    user.Email = "user@cancoly.com";
                    user.EmailConfirmed = true;
                    user.LockoutEnabled = false;
                    IdentityResult result = userManager.CreateAsync
                    (user, "Cancoly12!").Result;

                    if (result.Succeeded)
                    {
                        userManager.AddToRoleAsync(user, "User").Wait();
                    }

                }
                
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }



    }
}
