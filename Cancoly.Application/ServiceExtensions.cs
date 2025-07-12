using System.Reflection;
using Cancoly.Application.Common.Extention;
using Cancoly.Application.Common.Workers;
using Cancoly.Application.Features;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.ML;

namespace Cancoly.Application
{
    public static class ServiceExtensions
    {
        public static void ConfigureApplication(this IServiceCollection services)
        {
            //services
            services.AddScoped<ScanuploadService>();
            services.AddScoped<ScanService>();
            services.AddScoped<ClientsService>();

            services.AddSingleton<OpenAIService>();
            services.AddSingleton<PaymentService>();
            services.AddSingleton<UploadFileService>();
            services.AddSingleton<EmailService>();
            services.AddSingleton<EmailConfiguration>();
            
            
             
            //workers
            services.AddHostedService<TumorClassifierWorker>();
        }
    }
}