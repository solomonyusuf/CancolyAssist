using Cancoly.Domain.Common;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Domain.Entities
{
    public class Scan : BaseEntity
    {
        public string? Image { get; set; }
        
        public string? Title { get; set; }

        public Client Client { get; set; }

        [ForeignKey("Client")]
        public Guid? ClientId { get; set; }
       
        public string? ReportUrl { get; set; }

        public bool? isComplete { get; set; } = false;

    }
}
