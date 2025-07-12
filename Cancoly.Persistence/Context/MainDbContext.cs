using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace Cancoly.Persistence.Context
{
    public class MainDbContext : ApplicationDbContext
    {
        public MainDbContext(DbContextOptions<MainDbContext> options)
        : base(options)
        {
        }
    }
}
