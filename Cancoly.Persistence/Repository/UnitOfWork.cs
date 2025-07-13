using Cancoly.Application.IRepository;
using Cancoly.Application.IRepository.All;
using Cancoly.Domain.Entities;
using Cancoly.Persistence.Context;
using Cancoly.Persistence.Repository.All;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Persistence.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private MainDbContext _mainDbContext;
        private UserManager<ApplicationUser> _userManager;

        public UnitOfWork(MainDbContext mainDbContext, UserManager<ApplicationUser> userManager)
        {
            _mainDbContext = mainDbContext;
            _userManager = userManager;
        }

        INotificationRepository IUnitOfWork.NotificationRepository => new NotificationRepository(_mainDbContext);

        IBrainScanRepository IUnitOfWork.BrainScanRepository => new BrainScanRepository(_mainDbContext);

        IAuthRepository IUnitOfWork.AuthRepository => new AuthRepository(_userManager);

        ITransactionRepository IUnitOfWork.TransactionRepository => new TransactionRepository(_mainDbContext);

        Task IUnitOfWork.Save()
        {
            return _mainDbContext.SaveChangesAsync();
        }

        void IDisposable.Dispose()
        {
             this._mainDbContext.Dispose();
        }
    }
}
