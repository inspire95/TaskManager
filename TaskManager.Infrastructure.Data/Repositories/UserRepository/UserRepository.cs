using System;
using System.Linq;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces.Repositories;
using TaskManager.Infrastructure.Data.Context;

namespace TaskManager.Infrastructure.Data.Repositories.UserRepository
{
    public class UserRepository : IUserRepository
    {
        private readonly TaskManagerContext _context;
        public UserRepository(TaskManagerContext context)
        {
            _context = context;
        }

        public UserEntity GetById(int id)
        {
            return _context.Users.Where(x => x.Id.Equals(id)).FirstOrDefault();
        }

        public UserEntity GetByEmail(string email)
        {
            try
            {
                return _context.Users.Where(x => x.Email.Equals(email)).FirstOrDefault();
            }
            catch (Exception error)
            {
                throw error;
            }
        }

        public UserEntity Add(UserEntity user)
        {
            try
            {
                _context.Users.Add(user);
                _context.SaveChanges();
                return user;
            }
            catch (Exception error)
            {
                throw error;
            }
        }
    }
}