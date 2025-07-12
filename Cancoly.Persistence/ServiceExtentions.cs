using Cancoly.Domain.Entities;
using Cancoly.Persistence.Context;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Cancoly.Application.IRepository;
using Cancoly.Persistence.Repository;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

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

            services.AddScoped<UserManager<ApplicationUser>>();
            services.AddScoped<RoleManager<ApplicationRole>>();

            // Create Scoped Services
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<INotificationRepository, NotificationRepository>();
            services.AddScoped<IScanRepository, ScanRepository>();
            services.AddScoped<IScanUploadRepository, ScanUploadRepository>();
            services.AddScoped<ITransactionRepository, TransactionRepository>();
            services.AddScoped<IAccountMetrixRepository, AccountMetrixRepository>();
            services.AddScoped<IClientRepository, ClientRepository>();
            services.AddScoped<IDICOMServerRepository, DICOMServerRepository>();
            services.AddScoped<INeuralNetworkModelRepository, NeuralNetworkModelRepository>();
            services.AddScoped<INoteRepository, NoteRepository>();
            services.AddScoped<IOrganizationRepository, OrganizationRepository>();
        }
    }
}
