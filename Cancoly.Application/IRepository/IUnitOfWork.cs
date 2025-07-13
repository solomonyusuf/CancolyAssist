using Cancoly.Application.IRepository.All;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Application.IRepository
{
    public interface IUnitOfWork : IDisposable 
    {
        public IAuthRepository AuthRepository { get; }
        
        public INotificationRepository NotificationRepository { get; }
        
        public IBrainScanRepository BrainScanRepository { get; }

        public IBrainScanUploadRepository ScanUploadRepository { get; }
        
        public ITransactionRepository TransactionRepository { get; }

        public Task Save();
    }
}
