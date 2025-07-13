using System.Reflection;
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
            services.AddTransient<PaymentService>();
            services.AddTransient<UploadFileService>();
            services.AddTransient<OpenAIService>();

            //workers
            services.AddHostedService<MailSenderWorker>();
            services.AddHostedService<TumorClassifierWorkerdded tumor cl>();
        }
    }
}