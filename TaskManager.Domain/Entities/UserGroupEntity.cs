using System;

namespace TaskManager.Domain.Entities
{
    public class UserGroupEntity
    {
        public bool IsAdministrator { get; set; }
        public int UserId { get; set; }
        public virtual UserEntity User { get; set; }
        public int BoardId { get; set; }
        public virtual BoardEntity Board { get; set; }
        public bool Active { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public UserGroupEntity()
        {
            CreatedAt = DateTime.Now;
            Active = true;
        }
    }
}