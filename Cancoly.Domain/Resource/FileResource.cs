using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Domain.Resource
{
    public class FileResource
    {
        [Required]
        public string fileString { get; set; }

        [Required]
        public string fileType { get; set; }
    }
}
