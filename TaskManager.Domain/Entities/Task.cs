using System;
using TaskManager.Domain.Entities.Enums;

namespace TaskManager.Domain.Entities
{
    public class Task
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int BoardId { get; set; }
        public virtual Board Board { get; set; }
        public TaskStatusEnum Status { get; set; }
        public bool Active { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}