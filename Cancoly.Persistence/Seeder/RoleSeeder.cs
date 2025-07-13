using Cancoly.Domain.Entities;
using Microsoft.AspNetCore.Identity;
 
namespace Cancoly.Persistence.Seeder
{
    public class RoleSeeder
    {
        public static void SeedRoles(RoleManager<ApplicationRole> roleManager)
        {
            try
            {
                if (!roleManager.RoleExistsAsync
                 ("User").Result)
                {
                    var role = new ApplicationRole();
                    role.Name = "User";
                    IdentityResult roleResult = roleManager.
                    CreateAsync(role).Result;
                }
                if (!roleManager.RoleExistsAsync
                 ("Professional").Result)
                {
                    var role = new ApplicationRole();
                    role.Name = "Professional";
                    IdentityResult roleResult = roleManager.
                    CreateAsync(role).Result;
                }
                
                if (!roleManager.RoleExistsAsync
                 ("Business").Result)
                {
                    var role = new ApplicationRole();
                    role.Name = "Business";
                    IdentityResult roleResult = roleManager.
                    CreateAsync(role).Result;
                }

                if (!roleManager.RoleExistsAsync
                    ("Admin").Result)
                {
                    var role = new ApplicationRole();
                    role.Name = "Admin";
                    IdentityResult roleResult = roleManager.
                    CreateAsync(role).Result;
                }

              
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
