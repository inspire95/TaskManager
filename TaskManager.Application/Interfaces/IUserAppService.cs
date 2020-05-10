using TaskManager.Domain.Entities;

namespace TaskManager.Application.Interfaces
{
    public interface IUserAppService
    {
        UserEntity GetById(int id);
        UserEntity GetByEmail(string email);
        UserEntity Add(UserEntity user);
        UserEntity Signin(UserEntity user);
    }
}