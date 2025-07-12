using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using Cancoly.Persistence.Context;
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

        IScanRepository IUnitOfWork.BrainScanRepository => new ScanRepository(_mainDbContext);

        IUserRepository IUnitOfWork.UserRepository => new UserRepository(_userManager, _mainDbContext);

        ITransactionRepository IUnitOfWork.TransactionRepository => new TransactionRepository(_mainDbContext);

        IClientRepository IUnitOfWork.ClientRepository => new ClientRepository(_mainDbContext);

        IDICOMServerRepository IUnitOfWork.DICOMServerRepository => new DICOMServerRepository(_mainDbContext);

        IOrganizationRepository IUnitOfWork.OrganizationRepository => new OrganizationRepository(_mainDbContext);

        IScanUploadRepository IUnitOfWork.ScanUploadRepository => new ScanUploadRepository(_mainDbContext);

        void IUnitOfWork.Save()
        {
           _mainDbContext.SaveChanges();
        }

        void IDisposable.Dispose()
        {
             this._mainDbContext.Dispose();
        }
    }
}
