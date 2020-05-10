using System;
using System.Collections.Generic;

namespace TaskManager.Domain.Entities
{
    public class UserEntity
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

        public virtual ICollection<BoardEntity> Boards { get; set; }

        public UserEntity()
        {
            //Board = new list <Board>;
            Active = true;
            CreatedAt = DateTime.Now;
        }

        public bool validatePassword(string password, string storedPassword)
        {
            return BCrypt.Net.BCrypt.Verify(password, storedPassword);
        }

        public string hashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }
    }
}