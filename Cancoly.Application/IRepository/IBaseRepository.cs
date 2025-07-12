using Cancoly.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Application.IRepository
{
    public interface IBaseRepository<T> where T : BaseEntity
    {
        T Create(T entity);
        T Update(T entity);
        void BulkCreate(List<T> entities);
        void BulkUpdate(List<T> entities);
        void Delete(T entity);
        Task<T> Get(Guid id);
        Task<List<T>> GetAll(); 
        IQueryable<T> Query(); 
    }
}
