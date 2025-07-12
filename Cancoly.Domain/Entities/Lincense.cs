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
    public class Lincense : BaseEntity
    {
        public double? Price { get; set; }

        [AllowedValues("Annual", "Monthly", "Weekly", "Single")]
        public string Subscription { get; set; }
        
        public int MonthlyLimit { get; set; }

        public int AnnualLimit { get; set; }

        public int WeeklyLimit { get; set; }

        public int OneOffLimit { get; set; }

        public int Expiry { get; set; }

    }
  
}
