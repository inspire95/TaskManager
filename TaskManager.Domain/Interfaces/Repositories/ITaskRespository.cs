using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;

namespace TaskManager.Domain.Interfaces.Repositories
{
    public interface ITaskRepository
    {
        Entities.Task GetById(int id);
        List<Entities.Task> GetAllByBoardId(int boardId);
        Task<Domain.Entities.Task> Add(Domain.Entities.Task task);
        Task<Domain.Entities.Task> Update(Domain.Entities.Task task);
    }
}