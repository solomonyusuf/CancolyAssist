using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cancoly.Domain.Entities;

namespace Cancoly.Domain.Common
{
    public class BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public Guid? OrganizationId { get; set; }
        [ForeignKey("User")]
        public string? UserId { get; set; }
        public ApplicationUser User { get; set; }
        public DateTimeOffset DateCreated { get; set; }
        public DateTimeOffset? DateUpdated { get; set; }
        public DateTimeOffset? DateDeleted { get; set; }
        public bool IsDeleted { get; set; } = false;
        public bool IsSeen { get; set; } = false;
        public bool IsActive { get; set; } = true;
        public BaseEntity()
        {
            DateCreated = DateTimeOffset.Now;
        }
    }
}
