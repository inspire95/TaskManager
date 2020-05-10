using System;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces.Repositories;
using TaskManager.Domain.Interfaces.Services;

namespace TaskManager.Domain.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public UserEntity GetById(int id)
        {
            return _userRepository.GetById(id);
        }

        public UserEntity GetByEmail(string email)
        {
            return _userRepository.GetByEmail(email);
        }

        public UserEntity Add(UserEntity user)
        {
            var storedUser = _userRepository.GetByEmail(user.Email);

            if (storedUser == null)
            {
                user.Password = user.hashPassword(user.Password);
                try
                {
                    var saveUser = _userRepository.Add(user);
                    return saveUser;
                }
                catch (Exception error)
                {
                    throw error;
                }
            }

            throw new Exception("User already exists");
        }

        public UserEntity Signin(UserEntity user)
        {
            var storedUser = _userRepository.GetByEmail(user.Email);

            if (storedUser != null)
            {
                //user.Password = user.hashPassword(user.Password);
                var passwordIsValid = user.validatePassword(user.Password, storedUser.Password);

                if (passwordIsValid)
                {
                    return storedUser;
                }
                else
                {
                    throw new Exception("User or Password is incorrect or not exists!");
                }
            }

            throw new Exception("User or Password is incorrect or not exists!");
        }
    }
}
