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

        public List<Domain.Entities.Task> GetAllByBoardId(int boardId)
        {
            return _taskRepository.GetAllByBoardId(boardId);
        }

        public Domain.Entities.Task GetById(int id)
        {
            return _taskRepository.GetById(id);
        }

        public async Task<Domain.Entities.Task> Add(Domain.Entities.Task task)
        {
            var storedBoard = _boardRepository.GetById(task.BoardId);

            if (storedBoard == null)
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
    }
}