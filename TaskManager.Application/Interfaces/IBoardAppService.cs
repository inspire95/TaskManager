using System.Collections.Generic;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;

namespace TaskManager.Application.Interfaces
{
    public interface IBoardAppService
    {
        Board GetById(int id);
        List<Board> GetAllByUserId(int userId);
        Task<Board> Add(Board board);
        Task<Board> Update(Board board);
    }
}