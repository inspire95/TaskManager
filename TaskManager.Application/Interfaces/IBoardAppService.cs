using System.Collections.Generic;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;

namespace TaskManager.Application.Interfaces
{
    public interface IBoardAppService
    {
        BoardEntity GetById(int id);
        List<BoardEntity> GetAllByUserId(int userId);
        Task<BoardEntity> Add(BoardEntity board);
        Task<BoardEntity> Update(BoardEntity board);
        Task<BoardEntity> Delete(int id);
    }
}