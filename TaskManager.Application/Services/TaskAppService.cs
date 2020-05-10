using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Application.Interfaces;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces.Services;

namespace TaskManager.Application.Services
{
    public class TaskAppService : ITaskAppService
    {
        private readonly ITaskService _taskService;

        public TaskAppService(ITaskService taskService)
        {
            _taskService = taskService;
        }

        public List<Domain.Entities.Task> GetAllByBoardId(int boardId)
        {
            return _taskService.GetAllByBoardId(boardId);
        }

        public Domain.Entities.Task GetById(int id)
        {
            return _taskService.GetById(id);
        }

        public async Task<Domain.Entities.Task> Add(Domain.Entities.Task task)
        {
            return await _taskService.Add(task);
        }
    }
}