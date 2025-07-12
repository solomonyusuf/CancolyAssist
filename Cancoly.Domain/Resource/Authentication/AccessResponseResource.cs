


namespace Cancoly.Domain.Resource.Authentication
{
    public class AccessResponseResource
    {
        public string AccessToken { get; set;}

        public DateTime Expiration { get; set;}

        public string Role { get; set;}

        public string? Organization { get; set; }

        public UserResource User { get; set;}  

        public bool TwoFactor { get; set;}

    }
}
