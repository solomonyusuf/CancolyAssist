using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Domain.Resource.Authentication
{
    public class ResetPasswordResource
    {
        [Required]
        public string ResetToken { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
