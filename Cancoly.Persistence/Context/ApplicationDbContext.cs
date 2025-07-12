using Cancoly.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

using System.ComponentModel.DataAnnotations.Schema;

namespace Cancoly.Persistence.Context
{
    /* ApplicationDbContext is used as a primary dbcontext for performing migration operations on the database.
     other dbcontexts will be used for querying purpose.
     */
    #nullable disable
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {

        protected ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            if (!Database.GetAppliedMigrations().Any())
            {
                Database.Migrate();
            }
        }

        public  DbSet<Organization> Organizations { get; set; }
        public  DbSet<AccountMetrix> AccountMetrixes { get; set; }
        public  DbSet<ApplicationUser> User { get; set; }
        public  DbSet<ApplicationRole> Role { get; set; }
        public  DbSet<ApplicationUserRole> UserRole { get; set; }
        public  DbSet<ScanUpload> ScanUploads { get; set; }
        public  DbSet<Scan> BrainScans { get; set; }
        public  DbSet<Notification> Notifications { get; set; }
        public  DbSet<Transaction> Transactions { get; set; }
        public  DbSet<Client> Clients { get; set; }
        public  DbSet<DICOMServer> DICOMServers { get; set; }
        public  DbSet<NeuralNetworkModel> NetworkModels { get; set; }
        public  DbSet<Note> Notes { get; set; }

    }
}