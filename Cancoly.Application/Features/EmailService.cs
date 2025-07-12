using Cancoly.Domain.Entities;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Cancoly.Application.Common.Extention;

namespace Cancoly.Application.Features
{
    public class EmailService 
    {
        private readonly IConfiguration _configuration;

        private EmailConfiguration _emailConfiguration;

        public EmailService(IConfiguration configuration, EmailConfiguration emailConfiguration)
        {
            _configuration = configuration;
            _emailConfiguration = emailConfiguration;
        }


        public async Task SendEmailAsync(string ToEmail, string Subject, string HTMLBody, ApplicationUser user = null)
        {
            try
            {

                MailMessage message = new MailMessage();
                message.From = new MailAddress(_emailConfiguration.FromEmail, "Cancoly Team");
                message.To.Add(new MailAddress(ToEmail));
                message.Subject = Subject;
                message.IsBodyHtml = true;
                message.Body = $@"
<!DOCTYPE html>
<html lang=""en"">

<head>
    <meta charset=""UTF-8"">
    <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
    <title>Cancoly Email</title>
    <link href=""https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"" rel=""stylesheet"">
    <link href=""https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"" rel=""stylesheet"">
    <style>
        body {{
            background-color: #f2f3f8;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }}

        .email-container {{
            max-width: 700px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }}

        .email-header {{
            background-color: #141b8d;
            color: #ffffff;
            text-align: center;
            padding: 20px 15px;
        }}

        .email-header img {{
            max-width: 150px;
        }}

        .email-body {{
            padding: 30px;
            color: #455056;
            line-height: 1.6;
        }}

        .email-body h2 {{
            color: #141b8d;
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: bold;
        }}

        .email-body p {{
            margin-bottom: 15px;
        }}

        .email-body a {{
            color: #141b8d;
            text-decoration: underline;
            font-weight: bold;
        }}

        .email-footer {{
            text-align: center;
            padding: 15px;
            background-color: #f8f9fa;
            font-size: 14px;
            color: #6c757d;
        }}

        .email-footer a {{
            color: #141b8d;
            text-decoration: none;
        }}

        .otp-button {{
            display: inline-block;
            background-color: #141b8d;
            color: #ffffff;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
        }}

        .otp-code {{
            font-size: 36px;
            font-weight: bold;
            color: #141b8d;
            text-align: center;
        }}
    </style>
</head>

<body>
    <div class=""email-container"">
        <!-- Header -->
        <div class=""email-header"">
            <img src=""https://cancoly.runasp.net/logo.png"" style=""height:45px;"" alt=""Cancoly Logo"">
        </div>

        <!-- Body -->
        {HTMLBody}

        <!-- Footer -->
        <div class=""email-footer"">
            <p>&copy; 2025 Cancoly - All Rights Reserved.</p>
            <p><a href=""#"">Visit Us</a></p>
        </div>
    </div>
</body>

</html>

";
                message.Priority = MailPriority.High;

                using var client = new SmtpClient
                {
                    Credentials = new NetworkCredential(_emailConfiguration.Username, _emailConfiguration.Password),
                    UseDefaultCredentials = false,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    EnableSsl = true,
                    Port = _emailConfiguration.Port,
                    Host = _emailConfiguration.Host,

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
