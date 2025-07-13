using Cancoly.Application.IRepository.All;
using Cancoly.Domain.Entities;
using Cancoly.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Persistence.Repository.All
{
    public class BrainScanRepository : BaseRepository<BrainScan>, IBrainScanRepository
    {
        public BrainScanRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
        }
    }
}
