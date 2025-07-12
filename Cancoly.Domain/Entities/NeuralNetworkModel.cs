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
    public class NeuralNetworkModel : BaseEntity
    {
        public string? Title { get; set; }

        public double? Accuray { get; set; }
      
        public double? Loss { get; set; }
       
        public double? Performance { get; set; }

    }
}
