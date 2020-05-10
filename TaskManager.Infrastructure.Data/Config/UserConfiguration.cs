using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using TaskManager.Domain.Entities;

namespace TaskManager.Infrastructure.Data.Config
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(user => user.Id);

            builder.Property(user => user.Name)
                .IsRequired()
                .HasMaxLength(500);

            builder.Property(user => user.Surname)
                .IsRequired()
                .HasMaxLength(500);

            builder.Property(user => user.Email)
                .IsRequired()
                .HasMaxLength(500);

            builder.Property(user => user.Active)
                .IsRequired();

            builder.Property(user => user.UrlPhoto)
                .HasMaxLength(500);

            builder.Property(user => user.Active)
                .IsRequired();

            builder.Property(user => user.CreatedAt)
                .IsRequired();

            builder.Property(user => user.UpdatedAt)
                .IsRequired();

            //builder.HasMany(user => user.Boards).WithOne(board => board.User);

            builder.HasData(
                new User()
                {
                    Id = 1,
                    Name = "root",
                    Surname = "root",
                    Email = "root@root.com",
                    Password = "123",
                    CreatedAt = DateTime.Now,
                    UpdatedAt = DateTime.Now,
                    Active = true,
                    UrlPhoto = ""
                }
            );
        }
    }
}