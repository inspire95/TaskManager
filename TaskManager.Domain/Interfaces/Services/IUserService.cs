using TaskManager.Domain.Entities;

namespace TaskManager.Domain.Interfaces.Services
{
    public interface IUserService
    {
        UserEntity GetById(int id);
        UserEntity GetByEmail(string email);
        UserEntity Add(UserEntity user);
        UserEntity Signin(UserEntity user);
    }
}