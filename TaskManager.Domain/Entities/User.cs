using System;
using System.Collections.Generic;

namespace TaskManager.Domain.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool Active { get; set; }
        public string UrlPhoto { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual ICollection<Board> Boards { get; set; }

        public User()
        {
            Active = true;
            CreatedAt = DateTime.Now;
        }
    }
}