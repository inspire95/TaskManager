using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Services;

namespace TaskManager.Domain.Interfaces.Repositories
{
    public interface IUserGroupRepository
    {
        List<UserGroupEntity> GetByUserId(int id);
        List<UserGroupEntity> GetByBoardId(int id);
        Task<UserGroupEntity> Add(UserGroupEntity usergroup);
    }
}
