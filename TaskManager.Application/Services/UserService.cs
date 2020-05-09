using TaskManager.Domain.Interfaces.Services;

namespace TaskManager.Application.Services.User
{
    public class UserService : IUserService
    {
        private readonly IUserService _userService;

        public UserService(IUserService userService)
        {
            _userService = userService;
        }

        public Domain.Entities.User GetById(int id)
        {
            return _userService.GetById(id);
        }

        public Domain.Entities.User GetByEmail(string email)
        {
            return _userService.GetByEmail(email);
        }
    }
}