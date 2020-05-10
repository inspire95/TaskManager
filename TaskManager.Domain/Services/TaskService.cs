using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces.Repositories;
using TaskManager.Domain.Interfaces.Services;

namespace TaskManager.Domain.Services
{
    public class TaskService : ITaskService
    {

        private readonly ITaskRepository _taskRepository;
        private readonly IBoardRepository _boardRepository;

        public TaskService(ITaskRepository taskRepository, IBoardRepository boardRepository)
        {
            _taskRepository = taskRepository;
            _boardRepository = boardRepository;
        }

        public List<TaskEntity> GetAllByBoardId(int boardId)
        {
            return _taskRepository.GetAllByBoardId(boardId);
        }

        public TaskEntity GetById(int id)
        {
            return _taskRepository.GetById(id);
        }

        public async Task<TaskEntity> Add(TaskEntity task)
        {
            var storedTask = _boardRepository.GetById(task.BoardId);

            if (storedTask == null)
            {
                throw new Exception("Board not exists! Choice another name!");
            }

            try
            {
                var saveTask = await _taskRepository.Add(task);
                return saveTask;
            }
            catch (Exception error)
            {
                throw error;
            }
        }

        public async Task<TaskEntity> Update(TaskEntity task)
        {
            var storedTask = _taskRepository.GetById(task.Id);

            if (storedTask != null)
            {
                try
                {
                    storedTask.Title = task.Title != null ? task.Title : storedTask.Title;
                    storedTask.Content = task.Content != null ? task.Content : storedTask.Content;
                    storedTask.BoardId = task.BoardId;
                    storedTask.Status = task.Status;
                    storedTask.Active = task.Active;
                    storedTask.UpdatedAt = DateTime.Now;

                    var updateTask = await _taskRepository.Update(storedTask);
                    return updateTask;
                }
                catch (Exception error)
                {
                    throw error;
                }
            }

            throw new Exception("Board not exists! Choice another name!");
        }
    }
}