﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;

namespace TaskManager.Domain.Interfaces.Repositories
{
    public interface IBoardRepository
    {
        BoardEntity GetById(int id);
        BoardEntity GetByName(string boardName);
        List<BoardEntity> GetAllByUserId(int userId);
        Task<BoardEntity> Add(BoardEntity board);
        Task<BoardEntity> Update(BoardEntity board);
        Task<BoardEntity> Delete(BoardEntity board);
    }
}