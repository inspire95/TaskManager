using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces.Repositories;
using TaskManager.Infrastructure.Data.Context;

namespace TaskManager.Infrastructure.Data.Repositories.UserGroupRepository
{
    public class UserGroupRepository : IUserGroupRepository
    {
        private readonly TaskManagerContext _context;
        public UserGroupRepository(TaskManagerContext context)
        {
            _context = context;
        }

        public List<UserGroupEntity> GetByUserId(int id)
        {
            return _context.UserGroups.Where(x => x.UserId.Equals(id)).ToList();
        }

        public List<UserGroupEntity> GetByBoardId(int id)
        {
            return _context.UserGroups.Where(x => x.BoardId.Equals(id)).ToList();
        }

        public async Task<UserGroupEntity> Add(UserGroupEntity usergroup)
        {
            try
            {
                _context.UserGroups.Add(usergroup);
                await _context.SaveChangesAsync();
                return usergroup;
            }
            catch (Exception error)
            {
                throw error;
            }
        }
    }
}