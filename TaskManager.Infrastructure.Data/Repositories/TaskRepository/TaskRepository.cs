using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces.Repositories;
using TaskManager.Infrastructure.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace TaskManager.Infrastructure.Data.Repositories.TaskRepository
{
    public class TaskRepository : ITaskRepository
    {
        private readonly TaskManagerContext _context;
        public TaskRepository(TaskManagerContext context)
        {
            _context = context;
        }

        public Domain.Entities.TaskEntity GetById(int id)
        {
            return _context.Tasks.Where(x => x.Id.Equals(id)).FirstOrDefault();
        }

        public List<Domain.Entities.TaskEntity> GetAllByBoardId(int boardId)
        {
            return _context.Tasks.Where(x => x.BoardId.Equals(boardId)).ToList();
        }

        public async Task<Domain.Entities.TaskEntity> Add(Domain.Entities.TaskEntity task)
        {
            try
            {
                _context.Tasks.Add(task);
                await _context.SaveChangesAsync();
                return task;
            }
            catch (Exception error)
            {
                throw error;
            }
        }

        public async Task<Domain.Entities.TaskEntity> Update(Domain.Entities.TaskEntity task)
        {
            try
            {
                _context.Tasks.Attach(task);
                var entry = _context.Entry(task);
                entry.State = EntityState.Modified;

                //_context.Tasks.Update(task);
                await _context.SaveChangesAsync();
                return task;
            }
            catch (Exception error)
            {
                throw error;
            }
        }
    }
}