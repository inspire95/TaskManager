using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;

namespace TaskManager.Domain.Interfaces.Services
{
    public interface IBoardService
    {
        Board GetById(int id);
        Board GetByName(string boardName);
        List<Board> GetAllByUserId(int userId);
        Task<Board> Add(Board board);
        Task<Board> Update(Board board);
        Task<Board> Delete(int id);
    }
}