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
    public class ScanUpload : BaseEntity
    {
        public BrainScan BrainScan { get; set; }

        [ForeignKey("BrainScan")]
        public Guid BrainScanId { get; set; }
        
        public string ImageUrl { get; set; }

        public string FilePath { get; set; }

        public string? Label { get; set; }

        public string? Size { get; set; }

        public string? Stage { get; set; }

        public string? Location { get; set; }

        public bool? Pending { get; set; }

        [MaxLength(1000000)]
        public string? Report { get; set; }

        public ScanUpload()
        {
            Pending = true;
        }

    }
}
