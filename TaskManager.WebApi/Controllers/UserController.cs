﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;
using TaskManager.WebApi.Models;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces.Services;


namespace TaskManager.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("GetById/{id}")]
        public ResponseMessage GetById(int id)
        {
            try
            {
                var user = _userService.GetById(id);

                if (user != null)
                {
                    return new ResponseMessage(true, user, "", HttpStatusCode.OK);
                }

                return new ResponseMessage(true, null, "User not found!", HttpStatusCode.OK);

            }
            catch (Exception err)
            {
                return new ResponseMessage(false, err, err.Message, HttpStatusCode.BadRequest);
            }
        }

        [HttpPost("signin")]
        public ResponseMessage Signin(User user)
        {
            try
            {
                var storedUser = _userService.GetByEmail(user.Email);
                return new ResponseMessage(false, null, "", HttpStatusCode.BadRequest);
            }
            catch (Exception err)
            {
                return new ResponseMessage(false, err, err.Message, HttpStatusCode.BadRequest);
            }
        }
    }
}