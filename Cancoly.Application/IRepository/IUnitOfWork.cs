using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Application.IRepository
{
    public interface IUnitOfWork : IDisposable 
    {
        public IUserRepository UserRepository { get; }
        
        public INotificationRepository NotificationRepository { get; }
        
        public IScanRepository BrainScanRepository { get; }
        
        public ITransactionRepository TransactionRepository { get; }
        
        public IClientRepository ClientRepository { get; }

        public IDICOMServerRepository DICOMServerRepository { get; }
       
        public IOrganizationRepository OrganizationRepository { get; }
        
        public IScanUploadRepository ScanUploadRepository { get; }

        public void Save();
    }
}
