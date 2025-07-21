using System.Reflection;
using Cancoly.Application.Common.Workers;
using Cancoly.Application.Features;
using Microsoft.Extensions.DependencyInjection;

namespace Cancoly.Application
{
    public static class ServiceExtensions
    {
        public static void ConfigureApplication(this IServiceCollection services)
        {
            services.AddTransient<PaymentService>();
            services.AddTransient<UploadFileService>();
            services.AddTransient<OpenAIService>();
            services.AddTransient<DICOMService>();

            //workers
            services.AddHostedService<MailSenderWorker>();
            services.AddHostedService<TumorClassifierWorker>();
        }
    }
}