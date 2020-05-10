using System.Collections.Generic;
using System.Threading.Tasks;
using TaskManager.Application.Interfaces;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces.Services;

namespace TaskManager.Application.Services
{
    public class BoardAppService : IBoardAppService
    {
        private readonly IBoardService _boardService;

        public BoardAppService(IBoardService boardService)
        {
            _boardService = boardService;
        }

        public BoardEntity GetById(int id)
        {
            return _boardService.GetById(id);
        }

        public List<BoardEntity> GetAllByUserId(int userId)
        {
            return _boardService.GetAllByUserId(userId);
        }

        public async Task<BoardEntity> Add(BoardEntity board)
        {
            return await _boardService.Add(board);
        }

        public async Task<BoardEntity> Update(BoardEntity board)
        {
            return await _boardService.Update(board);
        }

        public async Task<BoardEntity> Delete(int id)
        {
            return await _boardService.Delete(id);
        }
    }
}