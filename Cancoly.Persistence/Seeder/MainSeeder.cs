using Cancoly.Domain.Entities;
using Cancoly.Persistence.Context;
using Microsoft.AspNetCore.Identity;
 

namespace Cancoly.Persistence.Seeder
{
    public class MainSeeder
    {
        public static void SeedData(UserManager<ApplicationUser> userManager, RoleManager<ApplicationRole> roleManager, ApplicationDbContext context)
        {
            RoleSeeder.SeedRoles(roleManager);
            UserSeeder.SeedUsers(userManager);
            SettingsSeeder.SeedSetting(context);
        }
    }
}
