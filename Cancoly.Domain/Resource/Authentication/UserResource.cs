 using System.Diagnostics.CodeAnalysis;

namespace Cancoly.Domain.Resource.Authentication;

public class UserResource { 

    [AllowNull]
    public string? Id { get; set; }

    [AllowNull]
    public string? Image { get; set; }

    [AllowNull]
    public string? Email { get; set; }

    [AllowNull]
    public string? FirstName { get; set; }

    [AllowNull]
    public string? LastName { get; set; }

    [AllowNull]
    public Guid? OrganizationId { get; set; }
}