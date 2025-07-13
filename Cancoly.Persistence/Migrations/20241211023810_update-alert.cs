using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cancoly.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class updatealert : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "AllowMail",
                table: "Notifications",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "MailBody",
                table: "Notifications",
                type: "nvarchar(max)",
                maxLength: 300000,
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "MailSent",
                table: "Notifications",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AllowMail",
                table: "Notifications");

            migrationBuilder.DropColumn(
                name: "MailBody",
                table: "Notifications");

            migrationBuilder.DropColumn(
                name: "MailSent",
                table: "Notifications");
        }
    }
}
