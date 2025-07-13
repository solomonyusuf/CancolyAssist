using Cancoly.Domain.Entities;
using Cancoly.Persistence.Context;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cancoly.Application.IRepository.All;
using Cancoly.Application.IRepository;
using Cancoly.Persistence.Repository.All;
using Cancoly.Persistence.Repository;

namespace Cancoly.Persistence
{
    public static class ServiceExtentions
    {
        public static void ConfigurePersistence(this IServiceCollection services, string connectionString)
        {
           services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(connectionString, o => o.MigrationsAssembly("Cancoly.Persistence")));

            services.AddDbContext<WorkerDbContext>(options =>
                options.UseSqlServer(connectionString));

            services.AddDbContext<MainDbContext>(options =>
                options.UseSqlServer(connectionString));

            services.AddDbContext<LayoutDbContext>(options =>
                options.UseSqlServer(connectionString));

            
            // Register Scoped Services
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddScoped<INotificationRepository, NotificationRepository>();
            services.AddScoped<IBrainScanRepository, BrainScanRepository>();
            services.AddScoped<ITransactionRepository, TransactionRepository>();

        }
    }
}
