using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace Cancoly.Domain.Resource.Authentication
{
    public class RegisterUserResource
    {    
        [Required]
        [EmailAddress]
        [MaxLength(50, ErrorMessage = "Email Length(50) Exceeded")]
        public string Email { get; set; }

        [Required]
        [MaxLength(30, ErrorMessage = "Password Length(30) Exceeded")]
        [MinLength(8, ErrorMessage = "Password Length Short(8)")]
        public string Password { get; set; }
        
        //[Required]
        //[Compare("Password")]
        //[MaxLength(30, ErrorMessage = "NewPassword Length(30) Exceeded")]
        //[MinLength(8, ErrorMessage = "NewPassword Length Short(8)")]
        //public string ConfirmPassword { get; set; }

        [Required]
        public Guid OrganizationId { get; set; }
        
        [Required]
        public string ActivationLincense { get; set; }
        
    }
}
