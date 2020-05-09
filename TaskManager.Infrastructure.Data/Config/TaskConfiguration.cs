using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TaskManager.Domain.Entities;

namespace TaskManager.Infrastructure.Data.Config
{
    public class TaskConfiguration : IEntityTypeConfiguration<Task>
    {
        public void Configure(EntityTypeBuilder<Task> builder)
        {
            builder.HasKey(task => task.Id);

            builder.Property(task => task.Title)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(task => task.Content)
                .IsRequired()
                .HasMaxLength(500);

            builder.Property(task => task.BoardId);

            builder.HasOne(task => task.Board).WithMany(board => board.Tasks);

            builder.Property(task => task.Status).IsRequired();

            builder.Property(task => task.Active);

            builder.Property(task => task.CreatedAt)
                .IsRequired();

            builder.Property(task => task.UpdatedAt)
                .IsRequired();

        }
    }
}