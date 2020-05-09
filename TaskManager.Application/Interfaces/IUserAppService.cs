using TaskManager.Domain.Entities;

namespace TaskManager.Application.Interfaces
{
    public interface IUserAppService
    {
        User GetById(int id);
        User GetByEmail(string email);
        User Add(User user);
        User Signin(User user);
    }
}