using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;
using System.Threading.Tasks;
using TaskManager.WebApi.Models;
using TaskManager.Application.Interfaces;
using TaskManager.Domain.Entities;
using Newtonsoft.Json;

namespace TaskManager.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoardController : ControllerBase
    {
        private readonly IBoardAppService _boardService;

        public BoardController(IBoardAppService boardService)
        {
            _boardService = boardService;
        }

        [HttpGet("GetById/{id}")]
        public ResponseMessage GetById(int id)
        {
            try
            {
                var board = _boardService.GetById(id);

                if (board != null)
                {
                    return new ResponseMessage(true, board, "", HttpStatusCode.OK);
                }

                return new ResponseMessage(true, null, "Board not found!", HttpStatusCode.OK);

            }
            catch (Exception err)
            {
                return new ResponseMessage(false, err, err.Message, HttpStatusCode.BadRequest);
            }
        }


        [HttpGet("GetAllByUserId/{userid}")]
        public ResponseMessage GetAllByUserId(int userId)
        {
            try
            {
                var boards = _boardService.GetAllByUserId(userId);

                if (boards != null)
                {
                    return new ResponseMessage(true, boards, "", HttpStatusCode.OK);
                }

                return new ResponseMessage(true, null, "Board not found!", HttpStatusCode.OK);

            }
            catch (Exception err)
            {
                return new ResponseMessage(false, err, err.Message, HttpStatusCode.BadRequest);
            }
        }

        [HttpPost("add")]
        public async Task<ResponseMessage> Add(BoardEntity board)
        {
            try
            {
                var storedBoard = await _boardService.Add(board);
                return new ResponseMessage(true, storedBoard, "Board created with success!", HttpStatusCode.OK);
            }
            catch (Exception err)
            {
                return new ResponseMessage(false, null, err.Message, HttpStatusCode.BadRequest);
            }
        }

        [HttpPut("update")]
        public async Task<ResponseMessage> Update(BoardEntity board)
        {
            try
            {
                var storedBoard = await _boardService.Update(board);
                return new ResponseMessage(true, storedBoard, "Board updated with success!", HttpStatusCode.OK);
            }
            catch (Exception err)
            {
                return new ResponseMessage(false, null, err.Message, HttpStatusCode.BadRequest);
            }
        }
        [HttpDelete("delete/{id}")]
        public async Task<ResponseMessage> Delete(int id)
        {
            try
            {
                var storedBoard = await _boardService.Delete(id);
                return new ResponseMessage(true, null, "Board removed with success!", HttpStatusCode.OK);
            }
            catch (Exception err)
            {
                return new ResponseMessage(false, null, err.Message, HttpStatusCode.BadRequest);
            }
        }
    }
}