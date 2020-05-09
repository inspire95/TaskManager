using System;

namespace TaskManager.Domain.Entities
{
    public class UserGroup
    {
        public bool IsAdministrator { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public int BoardId { get; set; }
        public virtual Board Board { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}