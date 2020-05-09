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

        public User GetById(int id)
        {
            return _userService.GetById(id);
        }

        public User GetByEmail(string email)
        {
            return _userService.GetByEmail(email);
        }

        public User Add(User user)
        {
            return _userService.Add(user);
        }

        public User Signin(User user)
        {
            return _userService.Signin(user);
        }
    }
}