using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces.Repositories;
using TaskManager.Domain.Interfaces.Services;

namespace TaskManager.Domain.Services
{
    public class BoardService : IBoardService
    {
        private readonly IBoardRepository _boardRepository;

        public BoardService(IBoardRepository boardRepository)
        {
            _boardRepository = boardRepository;
        }

        public BoardEntity GetById(int id)
        {
            return _boardRepository.GetById(id);
        }

        public BoardEntity GetByName(string boardName)
        {
            return _boardRepository.GetByName(boardName);
        }

        public List<BoardEntity> GetAllByUserId(int userId)
        {
            return _boardRepository.GetAllByUserId(userId);
        }

        public async Task<BoardEntity> Add(BoardEntity board)
        {
            var storedBoard = _boardRepository.GetByName(board.Name);

            if (storedBoard == null)
            {
                try
                {
                    var saveUser = await _boardRepository.Add(board);
                    return saveUser;
                }
                catch (Exception error)
                {
                    throw error;
                }
            }

            throw new Exception("Board already exists! Choice another name!");
        }

        public async Task<BoardEntity> Update(BoardEntity board)
        {
            var storedBoard = _boardRepository.GetById(board.Id);

            if (storedBoard != null)
            {
                try
                {
                    storedBoard.Name = board.Name != null ? board.Name : storedBoard.Name;
                    storedBoard.Description = board.Description != null ? board.Description : storedBoard.Description;
                    storedBoard.UserGroups = board.UserGroups.Count > 0 ? board.UserGroups : storedBoard.UserGroups;
                    storedBoard.Active = board.Active;
                    storedBoard.UpdatedAt = DateTime.Now;

                    var updateUser = await _boardRepository.Update(storedBoard);
                    return updateUser;
                }
                catch (Exception error)
                {
                    throw error;
                }
            }

            throw new Exception("Board not exists! Choice another name!");
        }

        public async Task<BoardEntity> Delete(int id)
        {
            var storedBoard = _boardRepository.GetById(id);

            if (storedBoard != null)
            {
                try
                {
                    var deleteUser = await _boardRepository.Delete(storedBoard);
                    return deleteUser;
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