using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;

namespace TaskManager.Application.Interfaces
{
    public interface ITaskAppService
    {
        Domain.Entities.Task GetById(int id);
        List<Domain.Entities.Task> GetAllByBoardId(int boardId);
        Task<Domain.Entities.Task> Add(Domain.Entities.Task task);
    }
}