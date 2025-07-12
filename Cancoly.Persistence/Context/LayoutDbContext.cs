using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace Cancoly.Persistence.Context
{
    public class LayoutDbContext : ApplicationDbContext
    {
        public LayoutDbContext(DbContextOptions<LayoutDbContext> options)
        : base(options)
        {
        }
    }
}
