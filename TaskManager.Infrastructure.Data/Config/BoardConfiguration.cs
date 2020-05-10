using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TaskManager.Domain.Entities;

namespace TaskManager.Infrastructure.Data.Config
{
    public class BoardConfiguration : IEntityTypeConfiguration<Board>
    {
        public void Configure(EntityTypeBuilder<Board> builder)
        {
            builder.HasKey(board => board.Id);

            builder.Property(board => board.Name)
                .IsRequired()
                .HasMaxLength(500);

            builder.Property(board => board.Description)
                .IsRequired()
                .HasMaxLength(500);

            builder.Property(board => board.UserId)
                .IsRequired();

            //builder.HasOne(board => board.User)
            //   .WithMany(user => user.Boards);

            builder.Property(board => board.Active)
                .IsRequired();

            builder.HasMany(board => board.UserGroups)
                .WithOne(usergroup => usergroup.Board);

            //builder.HasMany(board => board.Tasks)
            //    .WithOne(task => task.Board);

            builder.Property(board => board.CreatedAt)
                .IsRequired();

            builder.Property(board => board.UpdatedAt)
                .IsRequired();

        }
    }
}