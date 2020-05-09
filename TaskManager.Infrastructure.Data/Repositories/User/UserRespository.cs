using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces.Repositories;
using TaskManager.Infrastructure.Data.Context;

namespace TaskManager.Infrastructure.Data.Repositories.User
{
    public class UserRespository : IUserRepository
    {
        private readonly TaskManagerContext _context;
        public UserRespository(TaskManagerContext context)
        {
            _context = context;
        }

        public Domain.Entities.User GetById(int id)
        {
            return _context.Users.Where(x => x.Id.Equals(id)).FirstOrDefault();
        }

        public Domain.Entities.User GetByEmail(string email)
        {
            return _context.Users.Where(x => x.Email.Equals(email)).FirstOrDefault();
        }
    }
}