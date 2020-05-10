using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces.Repositories;
using TaskManager.Infrastructure.Data.Context;

namespace TaskManager.Infrastructure.Data.Repositories.BoardRepository
{
    public class BoardRepository : IBoardRepository
    {
        private readonly TaskManagerContext _context;
        public BoardRepository(TaskManagerContext context)
        {
            _context = context;
        }

        public Board GetById(int id)
        {
            return _context.Boards.Where(x => x.Id.Equals(id)).FirstOrDefault();
        }

        public Board GetByName(string boardName)
        {
            return _context.Boards.Where(x => x.Name.Equals(boardName)).FirstOrDefault();
        }

        public List<Board> GetAllByUserId(int userId)
        {
            return _context.Boards.Where(x => x.UserId.Equals(userId)).ToList();
        }

        public async Task<Board> Add(Board board)
        {
            try
            {
                _context.Boards.Add(board);
                await _context.SaveChangesAsync();
                return board;
            }
            catch (Exception error)
            {
                throw error;
            }
        }

        public async Task<Board> Update(Board board)
        {
            try
            {
                _context.Boards.Update(board);
                await _context.SaveChangesAsync();
                return board;
            }
            catch (Exception error)
            {
                throw error;
            }
        }

        public async Task<Board> Delete(Board board)
        {
            try
            {
                _context.Boards.Remove(board);
                await _context.SaveChangesAsync();
                return board;
            }
            catch (Exception error)
            {
                throw error;
            }
        }
    }
}