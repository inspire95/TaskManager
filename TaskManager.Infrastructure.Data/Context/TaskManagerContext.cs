using Microsoft.EntityFrameworkCore;
using TaskManager.Domain.Entities;
using TaskManager.Infrastructure.Data.Config;

namespace TaskManager.Infrastructure.Data.Context
{
    public class TaskManagerContext : DbContext
    {
        public DbSet<UserEntity> Users { get; set; }
        public DbSet<UserGroupEntity> UserGroups { get; set; }
        public DbSet<BoardEntity> Boards { get; set; }
        public DbSet<TaskEntity> Tasks { get; set; }

        public TaskManagerContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new BoardConfiguration());
            modelBuilder.ApplyConfiguration(new TaskConfiguration());
            modelBuilder.ApplyConfiguration(new UserGroupConfiguration());

            base.OnModelCreating(modelBuilder);
        }
    }
}