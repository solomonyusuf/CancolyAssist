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
            if(!Database.GetAppliedMigrations().Any())
            {
                Database.Migrate();
            }
        }

        public virtual DbSet<ApplicationUser> User { get; set; }
        public virtual DbSet<ApplicationRole> Role { get; set; }
        public virtual DbSet<ApplicationUserRole> UserRole { get; set; }
        public virtual DbSet<BrainScan> BrainScans { get; set; }
        public virtual DbSet<ScanUpload> BrainScanUpload { get; set; }
        public virtual DbSet<Notification> Notifications { get; set; }
        public virtual DbSet<Transaction> Transactions { get; set; }

       

     

    }
}