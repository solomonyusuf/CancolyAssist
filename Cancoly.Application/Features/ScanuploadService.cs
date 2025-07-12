using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Application.Features
{
    public class ScanuploadService
    {
        private readonly IUnitOfWork _unitOfWork;

        public ScanuploadService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IQueryable<ScanUpload> GetAll(
            Guid organizationId,
            string userId = "",
            int pageNumber = 1,
            int pageSize = 10,
            string filter = ""
            )
        {
            var query = _unitOfWork.ScanUploadRepository.Query()
                                   .Where(x =>
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
                query = query.Where(x => x.Label.ToLower().Contains(filter.ToLower()));
            }

            return query.Skip((pageNumber - 1) * pageSize).Take(pageSize);
        }

        public Task<ScanUpload> Get(Guid id)
        {
            return _unitOfWork.ScanUploadRepository.Get(id);
        }

        public ScanUpload Create(ScanUpload scan)
        {
            var entity = _unitOfWork.ScanUploadRepository.Create(scan);
            _unitOfWork.Save();

            return entity;
        }

        public void BulkCreate(List<ScanUpload> scan)
        {
            _unitOfWork.ScanUploadRepository.BulkCreate(scan);
            _unitOfWork.Save();
        }

        public ScanUpload Update(ScanUpload scan)
        {
            var entity = _unitOfWork.ScanUploadRepository.Update(scan);
            _unitOfWork.Save();

            return entity;
        }

        public void BulkUpdate(List<ScanUpload> scan)
        {
            _unitOfWork.ScanUploadRepository.BulkUpdate(scan);
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
