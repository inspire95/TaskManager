using TaskManager.Domain.Entities;

namespace TaskManager.Domain.Interfaces.Services
{
    public interface IUserService
    {
        User GetById(int id);
        User GetByEmail(string email);
    }
}