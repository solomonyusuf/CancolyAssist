using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using Cancoly.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Persistence.Repository
{
    public class DICOMServerRepository : BaseRepository<DICOMServer>, IDICOMServerRepository
    {
        public DICOMServerRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
        }
    }
}
