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
    public class Organization : BaseEntity
    {
        public string? Title { get; set; }

        public string? Image { get; set; }
       
        public string? Logo { get; set; }
       
        public string? Address { get; set; }

        public string? City { get; set; }

        public string? State { get; set; }
    }
}
