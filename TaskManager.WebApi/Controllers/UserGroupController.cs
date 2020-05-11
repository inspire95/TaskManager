using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskManager.WebApi.Models;
using TaskManager.Application.Interfaces;
using TaskManager.Domain.Entities;

namespace TaskManager.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserGroupController : ControllerBase
    {
        private readonly IUserGroupAppService _usergroupService;

        public UserGroupController(IUserGroupAppService usergroupService)
        {
            _usergroupService = usergroupService;
        }

        [HttpGet("GetByUserId/{id}")]
        public ResponseMessage GetByUserId(int id)
        {
            try
            {
                var board = _usergroupService.GetByUserId(id);

                if (board != null)
                {
                    return new ResponseMessage(true, board, "", HttpStatusCode.OK);
                }

                return new ResponseMessage(true, null, "UserGroup not found!", HttpStatusCode.OK);

            }
            catch (Exception err)
            {
                return new ResponseMessage(false, err, err.Message, HttpStatusCode.BadRequest);
            }
        }

        [HttpGet("GetByBoardId/{id}")]
        public ResponseMessage GetByBoardId(int id)
        {
            try
            {
                var board = _usergroupService.GetByBoardId(id);

                if (board != null)
                {
                    return new ResponseMessage(true, board, "", HttpStatusCode.OK);
                }

                return new ResponseMessage(true, null, "UserGroup not found!", HttpStatusCode.OK);

            }
            catch (Exception err)
            {
                return new ResponseMessage(false, err, err.Message, HttpStatusCode.BadRequest);
            }
        }


        [HttpPost("add")]
        public async Task<ResponseMessage> Add(UserGroupEntity usergroup)
        {
            try
            {
                var storedUserGroup = await _usergroupService.Add(usergroup);
                return new ResponseMessage(true, storedUserGroup, "UserGroup created with success!", HttpStatusCode.OK);
            }
            catch (Exception err)
            {
                return new ResponseMessage(false, null, err.Message, HttpStatusCode.BadRequest);
            }
        }
        [HttpPut("update")]
        public async Task<ResponseMessage> Update(UserGroupEntity usergroup)
        {
            try
            {
                var storedUserGroup = await _usergroupService.Update(usergroup);
                return new ResponseMessage(true, storedUserGroup, "UserGroup updated with success!", HttpStatusCode.OK);
            }
            catch (Exception err)
            {
                return new ResponseMessage(false, null, err.Message, HttpStatusCode.BadRequest);
            }
        }
    }
}