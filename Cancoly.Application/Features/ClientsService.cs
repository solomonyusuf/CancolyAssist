using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Application.Features
{
    public class ClientsService
    {
        private readonly IUnitOfWork _unitOfWork;

        public ClientsService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IQueryable<Client> GetAll(
            Guid organizationId,
            string userId = "",
            string filter = ""
            )
        {
            var query = _unitOfWork.ClientRepository.Query()
                                   .Where(x =>
                                   x.IsActive == true &&
                                   x.IsDeleted == false &&
                                   x.OrganizationId == organizationId
                                   ).AsQueryable();

            if (!string.IsNullOrWhiteSpace(userId))
            {
                query = query.Where(x => x.UserId.ToLower().Equals(filter.ToLower()));
            }
            if (!string.IsNullOrWhiteSpace(filter))
            {
                query = query.Where(x => 
                x.FirstName.ToLower().Contains(filter.ToLower()) ||
                x.LastName.ToLower().Contains(filter.ToLower()) 
                );
            }

            return query;
        }

        public Task<Client> Get(Guid id)
        {
            return _unitOfWork.ClientRepository.Get(id);
        }

        public Client Create(Client entityModel)
        {
            var entity = _unitOfWork.ClientRepository.Create(entityModel);
            _unitOfWork.Save();

            return entity;
        }

        public void BulkCreate(List<Client> entityModel)
        {
            _unitOfWork.ClientRepository.BulkCreate(entityModel);
            _unitOfWork.Save();
        }

        public Client Update(Client entityModel)
        {
            var entity = _unitOfWork.ClientRepository.Update(entityModel);
            _unitOfWork.Save();

            return entity;
        }

        public void BulkUpdate(List<Client> entityModel)
        {
            _unitOfWork.ClientRepository.BulkUpdate(entityModel);
            _unitOfWork.Save();
        }

        public void Delete(Client entityModel)
        {
            entityModel.IsDeleted = true;

            _unitOfWork.ClientRepository.Update(entityModel);
            _unitOfWork.Save();
        }
    }
}
