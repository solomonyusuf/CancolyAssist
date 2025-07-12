using Cancoly.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Application.IRepository
{
    public interface IUserRepository
    {
        public Task GetResetToken(ApplicationUser applicationUser);

        public Task<int> Count();

        public IQueryable<ApplicationUser> Query();

        public Task ResetPassword(ApplicationUser user, string resetToken, string newPassword);

        public Task ChangePassword(ApplicationUser user, string currentPassword, string newPassword);

        public IQueryable<ApplicationUser> QueryPaginate(int page = 1, int pageSize = 10);

        public Task<IList<string>> GetRoles(ApplicationUser user);

        public Task<bool> CheckPassword(ApplicationUser user, string password);

        public Task<ApplicationUser> FindByMail(string Email);

        public Task<ApplicationUser> FindOrDefault(string Id);

        public Task<ApplicationUser> Create(ApplicationUser entity, string Password);

        public Task<ApplicationUser> Update(ApplicationUser entity);

        public Task AddToRole(ApplicationUser entity, string role);

        public Task Delete(ApplicationUser entity);
    }
}
