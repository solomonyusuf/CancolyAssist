using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using Cancoly.Persistence.Context;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Cancoly.Persistence.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly UserManager<ApplicationUser> _userManager;

        private readonly MainDbContext _context;

        public UserRepository(
            UserManager<ApplicationUser> userManager,
            MainDbContext context)
        {
            _userManager = userManager;
            _context = context;
        }

        public Task GetResetToken(ApplicationUser applicationUser)
        {
            return _userManager.GeneratePasswordResetTokenAsync(applicationUser);
        }

        public async Task<int> Count()
        {
            return await _context.User.CountAsync();
        }

        public IQueryable<ApplicationUser> Query()
        {
            return _context.User.AsQueryable().AsNoTracking();
        }

        public IQueryable<ApplicationUser> QueryPaginate(int page = 1, int pageSize = 10)
        {
            var query = _context.User.AsQueryable().AsNoTracking();

            if (query.Count() > pageSize)
            {
                var totalCount = query.Count();
                var totalPages = (int)Math.Ceiling((double)totalCount / pageSize);

                query = query.Skip((page - 1) * pageSize).Take(pageSize);
            }


            return query;
        }

        public async Task ResetPassword(ApplicationUser user, string resetToken, string newPassword)
        {
            await _userManager.ResetPasswordAsync(user, resetToken, newPassword);
        }

        public async Task ChangePassword(ApplicationUser user, string currentPassword, string newPassword)
        {
            await _userManager.ChangePasswordAsync(user, currentPassword, newPassword);
        }

        public async Task<IList<string>> GetRoles(ApplicationUser user)
        {
            return await _userManager.GetRolesAsync(user);
        }

        public async Task<bool> CheckPassword(ApplicationUser user, string password)
        {
            return await _userManager.CheckPasswordAsync(user, password);
        }

        public async Task<ApplicationUser> FindByMail(string Email)
        {
            return await _userManager.FindByEmailAsync(Email);
        }

        public async Task<ApplicationUser> FindOrDefault(string Id)
        {
            return await _context.User.FindAsync(Id);
        }

        public async Task<ApplicationUser> Create(ApplicationUser entity, string Password)
        {
            var query = await _userManager.CreateAsync(entity, Password);
            var user = new ApplicationUser();

            if (query.Succeeded)
            {
                user = await _userManager.FindByEmailAsync(entity.Email);
            }

            return user;

        }

        public async Task<ApplicationUser> Update(ApplicationUser entity)
        {
            await _userManager.UpdateAsync(entity);

            return entity;
        }

        public async Task AddToRole(ApplicationUser entity, string role)
        {
            await _userManager.AddToRoleAsync(entity, role);
        }

        public async Task Delete(ApplicationUser entity)
        {
            await _userManager.DeleteAsync(entity);
        }

    }
}
