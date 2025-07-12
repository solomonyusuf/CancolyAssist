using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace Cancoly.Persistence.Context
{
    public class ApiDbContext : ApplicationDbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options)
        : base(options)
        {
        }
    }
}
