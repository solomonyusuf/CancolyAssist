using System.ComponentModel.DataAnnotations;

namespace Cancoly.Domain.Resource.Authentication
{
    public class LoginResource
    {
        [Required]
        [MaxLength(50, ErrorMessage ="Email Length(50) Exceeded")]
        public string Email { get; set; }

        [Required]
        [MaxLength(30, ErrorMessage = "OldPassword Length(30) Exceeded")]
        [MinLength(8, ErrorMessage = "OldPassword Length Short(8)")]
        public string Password { get; set; }

        [Required]
        public Guid OrganizationId { get; set; }
    }
}
