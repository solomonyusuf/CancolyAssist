using Cancoly.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Application.Common.DTOs
{
    public class ScanOutputDTO 
    {
       
        public string status { get; set; }

        public string confidence { get; set; }

        public string tumor_type { get; set; }

        public string tumor_size { get; set; }

        public string tumor_stage { get; set; }
       
        public string tumor_location { get; set; }
        
        public string description { get; set; } 
    }
}
