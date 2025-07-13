using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cancoly.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class updatesca : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FilePath",
                table: "BrainScans");

            migrationBuilder.AlterColumn<string>(
                name: "Report",
                table: "BrainScans",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "FilePaths",
                table: "BrainScans",
                type: "nvarchar(max)",
                maxLength: 30000,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Label",
                table: "BrainScans",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Score",
                table: "BrainScans",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FilePaths",
                table: "BrainScans");

            migrationBuilder.DropColumn(
                name: "Label",
                table: "BrainScans");

            migrationBuilder.DropColumn(
                name: "Score",
                table: "BrainScans");

            migrationBuilder.AlterColumn<string>(
                name: "Report",
                table: "BrainScans",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FilePath",
                table: "BrainScans",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
