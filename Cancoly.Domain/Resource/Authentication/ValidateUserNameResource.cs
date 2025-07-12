using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Domain.Resource.Authentication
{
    public class ValidateUserNameResource
    {
        [Required]
        [MaxLength(50)]
        public string UserName { get; set; }

    }
}
