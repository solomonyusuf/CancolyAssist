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
    public class Note : BaseEntity
    {
        public string? Category { get; set; }

        [MaxLength(1000000000)]
        public string? Content { get; set; }

        public bool? Favourite { get; set; } = false;
      
    }
}
