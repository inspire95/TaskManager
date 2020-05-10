using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TaskManager.Domain.Entities;

namespace TaskManager.Infrastructure.Data.Config
{
    public class UserGroupConfiguration : IEntityTypeConfiguration<UserGroupEntity>
    {
        public void Configure(EntityTypeBuilder<UserGroupEntity> builder)
        {
            builder.HasKey(usergroup => new { usergroup.UserId, usergroup.BoardId });

            builder.Property(usergroup => usergroup.CreatedAt).IsRequired();
            builder.Property(usergroup => usergroup.UpdatedAt).IsRequired();
        }
    }
}