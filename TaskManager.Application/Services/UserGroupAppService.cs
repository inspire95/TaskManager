using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Application.Interfaces;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces.Services;
using TaskManager.Domain.Services;

namespace TaskManager.Application.Services
{
    public class UserGroupAppService : IUserGroupAppService
    {
        private readonly IUserGroupService _usergroupService;

        public UserGroupAppService(IUserGroupService usergroupService)
        {
            _usergroupService = usergroupService;
        }

        public List<UserGroupEntity> GetByUserId(int id)
        {
            return _usergroupService.GetByUserId(id);
        }

        public List<UserGroupEntity> GetByBoardId(int id)
        {
            return _usergroupService.GetByBoardId(id);
        }

        public async Task<UserGroupEntity> Add(UserGroupEntity usergroup)
        {
            return await _usergroupService.Add(usergroup);
        }
    }
}