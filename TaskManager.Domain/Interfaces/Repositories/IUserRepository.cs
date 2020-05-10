using System.Collections.Generic;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;

namespace TaskManager.Domain.Interfaces.Repositories
{
    public interface IUserRepository
    {
        UserEntity GetById(int id);
        UserEntity GetByEmail(string email);
        UserEntity Add(UserEntity user);
    }
}