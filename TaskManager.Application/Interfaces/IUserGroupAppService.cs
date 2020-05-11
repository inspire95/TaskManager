using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;

namespace TaskManager.Application.Interfaces
{
    public interface IUserGroupAppService
    {
        List<UserGroupEntity> GetByUserId(int id);
        List<UserGroupEntity> GetByBoardId(int id);
        Task<UserGroupEntity> Add(UserGroupEntity usergroup);
    }
}