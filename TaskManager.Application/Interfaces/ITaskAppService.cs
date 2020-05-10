using System.Collections.Generic;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;

namespace TaskManager.Application.Interfaces
{
    public interface ITaskAppService
    {
        TaskEntity GetById(int id);
        List<TaskEntity> GetAllByBoardId(int boardId);
        Task<TaskEntity> Add(TaskEntity task);
        Task<TaskEntity> Update(TaskEntity task);
    }
}