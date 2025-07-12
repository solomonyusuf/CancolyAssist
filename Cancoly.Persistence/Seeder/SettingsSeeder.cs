using Cancoly.Persistence.Context;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
 
namespace Cancoly.Persistence.Seeder
{
    public class SettingsSeeder
    {
        public static void SeedSetting(ApplicationDbContext context)
        {
            if(context.Organizations.Count() == 0)
            {
                context.Organizations.Add(new Domain.Entities.Organization
                {
                    Image = "https://www.myschoolgist.com/wp-content/uploads/2023/02/Lagos-State-University-Teaching-Hospital-LASUTH-1536x1024.avif",
                    Title = "Lagos State University Teaching Hospital (LASUTH)",
                    Logo = "https://www.patientportal.lasuth.org.ng/public/assets/appointment/user/images/logo2.jpeg"

                });
                context.SaveChanges();
            }
            
            if(context.Organizations.Count() == 0)
            {
                context.Organizations.Add(new Domain.Entities.Organization
                {
                    Image = "https://luth.gov.ng/static/statue4-3eac85e500a5ff4a3701f7289a40e422.jpg",
                    Title = "Lagos University Teaching Hospital (LASUTH)",
                    Logo = "https://luth.gov.ng/static/luth-logo-cecc8a4c80312586cc537f7680a2e924.png"

                });
                context.SaveChanges();
            }
        }
    }
}
