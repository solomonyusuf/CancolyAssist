using Cancoly.Application.IRepository;
using Cancoly.Domain.Common;
using Cancoly.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Persistence.Repository
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
    {
        private MainDbContext _mainDbContext;
        
        public BaseRepository(MainDbContext mainDbContext)
        {
            _mainDbContext = mainDbContext;
        }

        T IBaseRepository<T>.Create(T entity)
        {
            return _mainDbContext.Add(entity).Entity;
        }

        void IBaseRepository<T>.BulkCreate(List<T> entities)
        {
            _mainDbContext.AddRange(entities);
        }

        T IBaseRepository<T>.Update(T entity)
        {
            return _mainDbContext.Update(entity).Entity;
        }       

        void IBaseRepository<T>.Delete(T entity)
        {
            _mainDbContext.Remove(entity);
        }

        Task<T> IBaseRepository<T>.Get(Guid id)
        {
            return _mainDbContext.Set<T>().FirstOrDefaultAsync(x => x.Id == id);
        }

        Task<List<T>> IBaseRepository<T>.GetAll()
        {
            return _mainDbContext.Set<T>().ToListAsync();
        }

        IQueryable<T> IBaseRepository<T>.Query()
        {
            return _mainDbContext.Set<T>().AsQueryable();
        }

        public void BulkUpdate(List<T> entities)
        {
            _mainDbContext.Set<T>().UpdateRange(entities);
        }
    }
}
