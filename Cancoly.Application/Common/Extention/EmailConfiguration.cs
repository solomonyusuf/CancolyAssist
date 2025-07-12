using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Application.Common.Extention
{
    [NotMapped]
    public class EmailConfiguration
    {
        private readonly IConfiguration _configuration;

        public EmailConfiguration(IConfiguration configuration)
        {
            _configuration = configuration;

            Username = _configuration.GetConnectionString("Username");
            Password = _configuration.GetConnectionString("Password");
            Port = int.Parse(_configuration.GetConnectionString("Port"));
            FromEmail = _configuration.GetConnectionString("FromEmail");
            Host = _configuration.GetConnectionString("MailHost");
        }

        public string Username { get; set; }
        public string Password { get; set; } 
        public int Port { get; set; }
        public string FromEmail { get; set; } 
        public string Host { get; set; }
    }
}
