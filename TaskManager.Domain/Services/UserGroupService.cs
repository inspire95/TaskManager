using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces.Repositories;
using TaskManager.Domain.Interfaces.Services;

namespace TaskManager.Domain.Services
{
    public class UserGroupService : IUserGroupService
    {
        private readonly IUserGroupRepository _usergroupRepository;
        private readonly IBoardRepository _boardRepository;

        public UserGroupService(IUserGroupRepository usergroupRepository, IBoardRepository boardRepository)
        {
            _usergroupRepository = usergroupRepository;
            _boardRepository = boardRepository;
        }

        public List<UserGroupEntity> GetByUserId(int id)
        {
            return _usergroupRepository.GetByUserId(id);
        }

        public List<UserGroupEntity> GetByBoardId(int id)
        {
            return _usergroupRepository.GetByBoardId(id);
        }

        public async Task<UserGroupEntity> Add(UserGroupEntity usergroup)
        {
            var storedBoard = _boardRepository.GetById(usergroup.BoardId);

            if (storedBoard != null)
            {
                try
                {
                    var saveUserGroup = await _usergroupRepository.Add(usergroup);

                    storedBoard.UserGroups.Add(usergroup);
                    var saveBoardUserGroup = await _boardRepository.Update(storedBoard);

                    return saveUserGroup;
                }
                catch (Exception error)
                {
                    throw error;
                }
            }

            throw new Exception("Board not exists! Choice another name!");
        }
    }
}