using Cancoly.Application.Features;
using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Application.Features
{
    public class ScanService
    {
        private readonly IUnitOfWork _unitOfWork;

        public ScanService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IQueryable<Scan> GetAll(
            Guid organizationId, 
            string userId = "",
            int pageNumber = 1,
            int pageSize = 10,
            string filter = ""
            )
        {
             var query = _unitOfWork.BrainScanRepository.Query()
                                    .Where(x=> 
                                    x.IsActive == true &&
                                    x.IsDeleted == false &&
                                    x.OrganizationId == organizationId 
                                    );

            if (!string.IsNullOrWhiteSpace(userId))
            {
                query = query.Where(x => x.UserId.ToLower().Equals(filter.ToLower()));
            }
            if (!string.IsNullOrWhiteSpace(filter))
            {
                query = query.Where(x => x.Title.ToLower().Contains(filter.ToLower()));
            }

           return query.Skip((pageNumber - 1) * pageSize).Take(pageSize);
        }
        
        public Task<Scan> Get(Guid id)
        {
            return _unitOfWork.BrainScanRepository.Get(id);
        }
        
        public Scan Create(Scan scan)
        {
            var entity = _unitOfWork.BrainScanRepository.Create(scan);
            _unitOfWork.Save();

            return entity;
        }

        public void BulkCreate(List<Scan> scan)
        {
            _unitOfWork.BrainScanRepository.BulkCreate(scan);
            _unitOfWork.Save();
        }
        
        public Scan Update(Scan scan)
        {
            var entity = _unitOfWork.BrainScanRepository.Update(scan);
            _unitOfWork.Save();

            return entity;
        }

        public void BulkUpdate(List<Scan> scan)
        {
            _unitOfWork.BrainScanRepository.BulkUpdate(scan);
            _unitOfWork.Save();
        }

        public void Delete(Scan scan)
        {
            scan.IsDeleted = true;

             _unitOfWork.BrainScanRepository.Update(scan);
            _unitOfWork.Save();
        }
    }
}

