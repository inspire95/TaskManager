using Microsoft.EntityFrameworkCore;
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

        public BoardEntity GetById(int id)
        {
            return _context.Boards.Where(x => x.Id.Equals(id)).FirstOrDefault();
        }

        public BoardEntity GetByName(string boardName)
        {
            return _context.Boards.Where(x => x.Name.Equals(boardName)).Include(x => x.Tasks).FirstOrDefault();
        }

        public List<BoardEntity> GetAllByUserId(int userId)
        {
            return _context.Boards.Where(x => x.UserId.Equals(userId)).ToList();
        }

        public async Task<BoardEntity> Add(BoardEntity board)
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

        public async Task<BoardEntity> Update(BoardEntity board)
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

        public async Task<BoardEntity> Delete(BoardEntity board)
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