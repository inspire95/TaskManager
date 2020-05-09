using System;
using System.Collections.Generic;

namespace TaskManager.Domain.Entities
{
    public class Board
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public bool Active { get; set; }
        public virtual ICollection<UserGroup> UserGroups { get; set; }
        public virtual ICollection<Task> Tasks { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public Board()
        {
            UserGroups = new List<UserGroup>();
            Tasks = new List<Task>();
        }
    }
}