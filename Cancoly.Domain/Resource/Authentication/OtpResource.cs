using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Domain.Resource.Authentication
{
    public class OtpResource
    {
        [Required]
        public string Otp { get; set; }
    }
}
