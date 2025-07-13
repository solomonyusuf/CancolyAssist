using Cancoly.Domain.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Domain.Entities
{
    public class Notification : BaseEntity
    {
        [ForeignKey("User")]
        public string? UserId { get; set; }
        public ApplicationUser User { get; set; }       
        public string Title { get; set; }
        public string Message { get; set; }
        [MaxLength(300000)]
        public string? MailBody { get; set; }
        public bool AllowMail { get; set; } = true;
        public bool MailSent { get; set; } = false;
    }
}
