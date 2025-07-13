using Cancoly.Application.IRepository;
using Cancoly.Application.IRepository.All;
using Cancoly.Domain.Common;
using Cancoly.Domain.Entities;
using Cancoly.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Persistence.Repository.All
{
    public class TransactionRepository : BaseRepository<Transaction>, ITransactionRepository
    {
        public TransactionRepository(MainDbContext context) : base(context)
        {        
        }
    }
}
