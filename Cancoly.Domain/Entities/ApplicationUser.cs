using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Domain.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public string? Image { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public AccountMetrix AccountMetrix { get; set; }
        public Organization Organization { get; set; }
        [ForeignKey("AccountMetrix")]
        public Guid? AccountMetrixId { get; set; }
        [ForeignKey("Organization")]
        public Guid? OrganizationId { get; set; }
        public DateTimeOffset DateCreated { get; set; } = DateTimeOffset.Now;
        public DateTimeOffset DateUpdated { get; set; } = DateTimeOffset.Now;
    }
}
