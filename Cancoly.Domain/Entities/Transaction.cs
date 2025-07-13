using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cancoly.Domain.Common;

namespace Cancoly.Domain.Entities
{
    public class Transaction: BaseEntity
    {
        public ApplicationUser User { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }

        public Guid? ConstrainId { get; set; }

        public string Service { get; set; }

        [AllowNull]
        public string Email { get; set; }

        [AllowNull]
        public string IPAddress { get; set; }

        [AllowNull]
        public string AuthorizationCode { get; set; }

        [AllowNull]
        public string CustomerCode { get; set; }

        [AllowNull]
        public string ReferenceId { get; set; }

        [AllowNull]
        public string Currency { get; set; }

        [AllowNull]
        public string Channel { get; set; }

        [AllowNull]
        public string Status { get; set; }

        [MaxLength(10000)]
        public string MetaData { get; set; }
      
        [AllowNull]
        public double Amount { get; set; }

        public double Charge { get; set; }
        
    }
}
