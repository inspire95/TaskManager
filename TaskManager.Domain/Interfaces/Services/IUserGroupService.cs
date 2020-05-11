using System.Collections.Generic;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;

namespace TaskManager.Domain.Interfaces.Services
{
    public interface IUserGroupService
    {
        List<UserGroupEntity> GetByUserId(int id);
        List<UserGroupEntity> GetByBoardId(int id);
        Task<UserGroupEntity> Add(UserGroupEntity usergroup);
        Task<UserGroupEntity> Update(UserGroupEntity usergroup);
    }
}