using Cancoly.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Application.IRepository.All
{
    public interface IAuthRepository
    {
        ApplicationUser GetUser(string Email);
        Task GetResetToken(ApplicationUser applicationUser);
        Task Login(ApplicationUser applicationUser, string password);
        Task Register(ApplicationUser applicationUser, string password);
        Task ForgotPassword(string email);
        Task ChangePassword(ApplicationUser applicationUser, string oldPassword, string newPassword);
        Task ResetPassword(ApplicationUser applicationUser, string token, string newPassword);
        Task UpdateUser(ApplicationUser applicationUser);
        Task DeleteUser(ApplicationUser applicationUser);

    }
}
