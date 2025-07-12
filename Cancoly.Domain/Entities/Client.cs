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
    public class Client : BaseEntity
    {
        public string? Image { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string? Email { get; set; }

        public string? PhoneNo { get; set; }
       
        public string? BirthDate { get; set; }

        public string? Sex { get; set; }

        [MaxLength(1000)]
        public string? ResidentialAddress { get; set; }

    }
  
}
