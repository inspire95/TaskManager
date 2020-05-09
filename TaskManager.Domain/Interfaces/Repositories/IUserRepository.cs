using System.Collections.Generic;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;

namespace TaskManager.Domain.Interfaces.Repositories
{
    public interface IUserRepository
    {
        User GetById(int id);
        User GetByEmail(string email);
    }
}