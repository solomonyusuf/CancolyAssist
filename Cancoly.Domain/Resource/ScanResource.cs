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
    public class ScanResource : BaseResource
    {
        [AllowNull]
        public string? Image { get; set; }

        [Required]
        public string? Title { get; set; }

        [AllowNull]
        public string? ClientId { get; set; }
        
        [AllowNull]
        public List<ScanuploadResource> uploads { get; set; }
    }
}
