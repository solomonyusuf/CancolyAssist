using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cancoly.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class updatescans : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "BrainScans",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "BrainScans",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "BrainScans");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "BrainScans");
        }
    }
}
