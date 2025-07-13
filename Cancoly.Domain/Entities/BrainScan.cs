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
    public class BrainScan : BaseEntity
    {
        [ForeignKey("User")]
        public string? UserId { get; set; }
        public ApplicationUser User { get; set; }
        [MaxLength(30000)]
        public string FilePaths { get; set; }
        public string? Email { get; set; }
        public string? Title { get; set; }
        public string? Label { get; set; }
        public string? Score { get; set; }
        public string? Report { get; set; }
    }
}
