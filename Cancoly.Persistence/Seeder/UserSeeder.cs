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
                    user.Image = "https://img.icons8.com/?size=100&id=s-N8pcnbC5So&format=png&color=000000";
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
                        userManager.AddToRoleAsync(user, "SuperRadiologist").Wait();
                    }
                }
                
                if (userManager.FindByNameAsync
                 ("super@cancoly.com").Result == null)
                {
                    var user = new ApplicationUser();
                    user.Image = "https://img.icons8.com/?size=100&id=s-N8pcnbC5So&format=png&color=000000";
                    user.UserName = "super@cancoly.com";
                    user.FirstName = "Nifemi";
                    user.LastName = "Ade";
                    user.Email = "super@cancoly.com";
                    user.EmailConfirmed = true;
                    user.LockoutEnabled = false;
                    IdentityResult result = userManager.CreateAsync
                    (user, "Cancoly12!").Result;

                    if (result.Succeeded)
                    {
                        userManager.AddToRoleAsync(user, "SuperRadiologist").Wait();
                    }
                }


                if (userManager.FindByNameAsync
                       ("radiologist@cancoly.com").Result == null)
                {
                    var user = new ApplicationUser();
                    user.Image = "https://img.icons8.com/?size=100&id=s-N8pcnbC5So&format=png&color=000000";
                    user.UserName = "radiologist@cancoly.com";
                    user.FirstName = "Femi";
                    user.LastName = "Babs";
                    user.Email = "radiologist@cancoly.com";
                    user.EmailConfirmed = true;
                    user.LockoutEnabled = false;
                    IdentityResult result = userManager.CreateAsync
                    (user, "Cancoly12!").Result;

                    if (result.Succeeded)
                    {
                        userManager.AddToRoleAsync(user, "Radiologist").Wait();
                    }

                }
                if (userManager.FindByNameAsync
                       ("chief@cancoly.com").Result == null)
                {
                    var user = new ApplicationUser();
                    user.Image = "https://img.icons8.com/?size=100&id=s-N8pcnbC5So&format=png&color=000000";
                    user.UserName = "chief@cancoly.com";
                    user.FirstName = "Okinwa";
                    user.LastName = "Balat";
                    user.Email = "chief@cancoly.com";
                    user.EmailConfirmed = true;
                    user.LockoutEnabled = false;
                    IdentityResult result = userManager.CreateAsync
                    (user, "Cancoly12!").Result;

                    if (result.Succeeded)
                    {
                        userManager.AddToRoleAsync(user, "ChiefRadiologist").Wait();
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
