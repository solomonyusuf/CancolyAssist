using Cancoly.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Domain.Resource
{
    public class BaseResource
    {
        [AllowNull]
        public Guid Id { get; set; }

        [Required]
        public string? OrganizationId { get; set; }

        [Required]
        public string? UserId { get; set; }

        [AllowNull]
        public bool IsDeleted { get; set; }

        [AllowNull]
        public bool IsActive { get; set; }
    }
}
