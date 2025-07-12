using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Domain.Resource.Authentication
{
    public class EmailResource
    {
        [Required]
        [MaxLength(50, ErrorMessage = "Email Length(50) Exceeded")]
        public string Email { get; set; }

    }
}
