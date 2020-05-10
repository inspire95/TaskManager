using System;
using System.Collections.Generic;

namespace TaskManager.Domain.Entities
{
    public class BoardEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int UserId { get; set; }
        //public virtual UserEntity User { get; set; }
        public bool Active { get; set; }
        public virtual ICollection<UserGroupEntity> UserGroups { get; set; }
        public virtual ICollection<TaskEntity> Tasks { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public BoardEntity()
        {
            UserGroups = new List<UserGroupEntity>();
            Tasks = new List<TaskEntity>();
            Active = true;
            CreatedAt = DateTime.Now;
        }
    }
}