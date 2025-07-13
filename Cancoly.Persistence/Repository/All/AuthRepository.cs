using Cancoly.Application.IRepository.All;
using Cancoly.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Persistence.Repository.All
{
    public class AuthRepository : IAuthRepository
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public AuthRepository(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public Task GetResetToken(ApplicationUser applicationUser)
        {
           return _userManager.GeneratePasswordResetTokenAsync(applicationUser);    
        }

        Task IAuthRepository.ChangePassword(ApplicationUser applicationUser, string oldPassword, string newPassword)
        {
           return _userManager.ChangePasswordAsync(applicationUser, oldPassword, newPassword);
        }

        Task IAuthRepository.DeleteUser(ApplicationUser applicationUser)
        {
            return _userManager.DeleteAsync(applicationUser);
        }

        Task IAuthRepository.ForgotPassword(string email)
        {
            return null;
        }

        Task IAuthRepository.Login(ApplicationUser applicationUser, string password)
        {
            return _userManager.CheckPasswordAsync(applicationUser, password);
        }

        Task IAuthRepository.Register(ApplicationUser applicationUser, string password)
        {
            return _userManager.CreateAsync(applicationUser, password);
        }

        Task IAuthRepository.ResetPassword(ApplicationUser applicationUser, string token, string newPassword)
        {
            return _userManager.ResetPasswordAsync(applicationUser, token, newPassword);
        }

        Task IAuthRepository.UpdateUser(ApplicationUser applicationUser)
        {
           return _userManager.UpdateAsync(applicationUser);
        }
        
        ApplicationUser IAuthRepository.GetUser(string Email)
        {
           return _userManager.FindByEmailAsync(Email).Result;
        }

         
    }
}
