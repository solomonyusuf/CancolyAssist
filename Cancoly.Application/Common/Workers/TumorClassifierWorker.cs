
using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Net.Mail;
using System.Net;
using System.Runtime.CompilerServices;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Identity;
using Cancoly.Application.Features;

namespace Cancoly.Application.Common.Workers
{
    public class TumorClassifierWorker : BackgroundService
    {
        private readonly ILogger<TumorClassifierWorker> _logger;
        private readonly IServiceProvider _provider;
        private readonly IConfiguration _configuration;

        public TumorClassifierWorker(IConfiguration configuration, IServiceProvider provider, ILogger<TumorClassifierWorker> logger)
        {
            _configuration = configuration;
            _provider = provider;
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {  
                
                while (!stoppingToken.IsCancellationRequested)
                {
                    try
                    {
                        var scope = _provider.CreateScope();
                        var _unitOfWork = scope.ServiceProvider.GetRequiredService<IUnitOfWork>();
                        var _openai = scope.ServiceProvider.GetRequiredService<OpenAIService>();
                        var _userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();

                        var scans = await _unitOfWork.BrainScanRepository.Query().Where(x=> x.isComplete == false).Take(5).ToListAsync();
                       
                        if (scans != null)
                        {
                            foreach (var item in scans)
                            {
                                if (item != null)
                                {
                                    var _unitOfWork2 = scope.ServiceProvider.GetRequiredService<IUnitOfWork>();

                                    var uploads = await _unitOfWork.ScanUploadRepository.Query()
                                                                   .Where(x => x.BrainScanId == item.Id)
                                                                   .ToListAsync();
                                    if(uploads != null)
                                    {
                                        
                                        foreach (var upload in uploads)
                                        {

                                            var payload = await _openai.GenerateOutput(upload.FilePath);

                                            upload.Pending = false;
                                            upload.Report = payload.description;
                                            upload.Location = payload.tumor_location;
                                            upload.Size = payload.tumor_size;
                                            upload.Label = payload.tumor_type;
                                            upload.Stage = payload.tumor_stage;
                                            upload.Confidence = double.Parse(payload.confidence);

                                        }

                                    }

                                    item.Report = "";

                                    _unitOfWork2.ScanUploadRepository.BulkUpdate(uploads);
                                    await _unitOfWork2.Save();

                                    item.isComplete = true;
                                }


                                await Task.Delay(10000, stoppingToken);
                            }

                            _unitOfWork.BrainScanRepository.BulkUpdate(scans);
                            await _unitOfWork.Save();
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex);
                    }

                    await Task.Delay(10000, stoppingToken);
                }
        }

        public async Task SendEmailAsync(string ToEmail, string Subject, string HTMLBody, ApplicationUser user = null)
        {
            try
            {

                var Username = _configuration.GetConnectionString("MailUserName");
                var Password = _configuration.GetConnectionString("MailPassword");
                var From = _configuration.GetConnectionString("Mailer");
                var Port = int.Parse(_configuration.GetConnectionString("MailPort") ?? "0");
                var MailHost = _configuration.GetConnectionString("MailHost");
                var ServerHost = _configuration.GetConnectionString("ServerHost");

                var Greeting = user == null ? "Hello Recipient" : ("Hi " + user.FirstName);
                MailMessage message = new MailMessage();
                message.From = new MailAddress(From, "Cancoly Team");
                message.To.Add(new MailAddress(ToEmail));
                message.Subject = Subject;
                message.IsBodyHtml = true;
                message.Body = $@"

<!DOCTYPE html>
<html lang=""en"">
<head>
    <meta charset=""UTF-8"">
    <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
    <title>Welcome to Cancoly</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
        }}
        .container {{
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border: 1px solid #ddd;
        }}
        .header {{
            background-color: #141b8d;
            color: #ffffff;
            text-align: center;
            padding: 20px;
            position: relative;
        }}
        .header img {{
            max-height: 50px;
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
        }}
        .header h1 {{
            margin: 0;
            font-size: 24px;
        }}
        .content {{
            padding: 20px;
            color: #333;
            line-height: 1.6;
        }}
        .content h2 {{
            color: #141b8d;
            font-size: 20px;
        }}
        .button {{
            display: inline-block;
            margin: 20px 0;
            padding: 10px 20px;
            color: #ffffff;
            background-color: #141b8d;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
        }}
        .footer {{
            background-color: #f4f4f9;
            text-align: center;
            padding: 15px;
            font-size: 14px;
            color: #888;
        }}
        .footer a {{
            color: #141b8d;
            text-decoration: none;
        }}
    </style>
</head>
<body>
    <div class=""container"">
        <div class=""header"">
            <img src=""{ServerHost}/logo.png"" style=""height:50px;"" alt=""Cancoly Logo"">
            <h1>{Subject}</h1>
        </div>
        <div class=""content"">
            <h2>{Greeting},</h2>
            {HTMLBody}
            <p>If you have any questions, feel free to <a href=""mailto:support@cancoly.com"">contact us</a>. We're here to help!</p>
            <p>Best regards,<br>The Cancoly Team</p>
        </div>
        <div class=""footer"">
            <p>&copy; 2024 Cancoly. All rights reserved.</p>
            <p><a href=""{{{{unsubscribe_link}}}}"">Unsubscribe</a> | <a href=""{{{{privacy_policy_link}}}}"">Privacy Policy</a></p>
        </div>
    </div>
</body>
</html>
";
                message.Priority = MailPriority.High;

                using var client = new SmtpClient
                {
                    Credentials = new NetworkCredential(Username, Password),
                    UseDefaultCredentials = false,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    EnableSsl = false,
                    Port = Port,
                    Host = MailHost,

                };

                await client.SendMailAsync(message);

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}

