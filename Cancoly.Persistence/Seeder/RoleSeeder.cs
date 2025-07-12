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
                 ("Radiologist").Result)
                {
                    var role = new ApplicationRole();
                    role.Name = "Radiologist";
                    IdentityResult roleResult = roleManager.
                    CreateAsync(role).Result;
                }
                if (!roleManager.RoleExistsAsync
                 ("ChiefRadiologist").Result)
                {
                    var role = new ApplicationRole();
                    role.Name = "ChiefRadiologist";
                    IdentityResult roleResult = roleManager.
                    CreateAsync(role).Result;
                }
                
                if (!roleManager.RoleExistsAsync
                 ("SuperRadiologist").Result)
                {
                    var role = new ApplicationRole();
                    role.Name = "SuperRadiologist";
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
