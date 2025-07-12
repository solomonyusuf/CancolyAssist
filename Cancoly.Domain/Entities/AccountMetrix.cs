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
    public class AccountMetrix : BaseEntity
    {
        public string? Key { get; set; }

        public Organization Organization { get; set; }

        [ForeignKey("Organization")]
        public Guid? OrganizationId { get; set; }

        public Lincense Lincense { get; set; }

        [ForeignKey("Lincense")]
        public Guid? LincenseId { get; set; }

        public Transaction Transaction { get; set; }

        [ForeignKey("Transaction")]
        public Guid? TransactionId { get; set; }

        public int MonthlyLimit { get; set; }
      
        public int AnnualLimit { get; set; }

        public int WeeklyLimit { get; set; }

        public int OneOffLimit { get; set; }
        
        public int ActualUsage { get; set; }

        public bool MaxedOut { get; set; } = false;
    }
}
