using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EstoqueWebApi.Migrations
{
    public partial class NewMigrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Estoques",
                newName: "EstoqueId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "EstoqueId",
                table: "Estoques",
                newName: "Id");
        }
    }
}
