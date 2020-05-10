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

        public Board GetById(int id)
        {
            return _boardService.GetById(id);
        }

        public List<Board> GetAllByUserId(int userId)
        {
            return _boardService.GetAllByUserId(userId);
        }

        public async Task<Board> Add(Board board)
        {
            return await _boardService.Add(board);
        }

        public async Task<Board> Update(Board board)
        {
            return await _boardService.Update(board);
        }
    }
}