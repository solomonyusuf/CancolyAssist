using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace Cancoly.Persistence.Context
{
    public class WorkerDbContext : ApplicationDbContext
    {
        public WorkerDbContext(DbContextOptions<WorkerDbContext> options)
        : base(options)
        {
        }
    }
}
