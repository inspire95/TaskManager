using TaskManager.Application.Interfaces;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces.Services;

namespace TaskManager.Application.Services
{
    public class UserAppService : IUserAppService
    {
        private readonly IUserService _userService;

        public UserAppService(IUserService userService)
        {
            _userService = userService;
        }

        public UserEntity GetById(int id)
        {
            return _userService.GetById(id);
        }

        public UserEntity GetByEmail(string email)
        {
            return _userService.GetByEmail(email);
        }

        public UserEntity Add(UserEntity user)
        {
            return _userService.Add(user);
        }

        public UserEntity Signin(UserEntity user)
        {
            return _userService.Signin(user);
        }
    }
}