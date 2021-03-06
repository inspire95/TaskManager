﻿using System;
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

        public List<TaskEntity> GetAllByBoardId(int boardId)
        {
            return _taskService.GetAllByBoardId(boardId);
        }

        public TaskEntity GetById(int id)
        {
            return _taskService.GetById(id);
        }

        public async Task<TaskEntity> Add(TaskEntity task)
        {
            return await _taskService.Add(task);
        }

        public async Task<TaskEntity> Update(TaskEntity task)
        {
            return await _taskService.Update(task);
        }

        public async Task<TaskEntity> DeleteAsync(int id)
        {
            return await _taskService.Delete(id);
        }
    }
}