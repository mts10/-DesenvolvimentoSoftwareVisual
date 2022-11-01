using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EstoqueWebApi.Migrations
{
    public partial class SegundaMigracao : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Estoques_Produtos_ProdutoId",
                table: "Estoques");

            migrationBuilder.AddColumn<double>(
                name: "Preco",
                table: "Produtos",
                type: "REAL",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AlterColumn<string>(
                name: "ProdutoId",
                table: "Estoques",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Estoques_Produtos_ProdutoId",
                table: "Estoques",
                column: "ProdutoId",
                principalTable: "Produtos",
                principalColumn: "ProdutoId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Estoques_Produtos_ProdutoId",
                table: "Estoques");

            migrationBuilder.DropColumn(
                name: "Preco",
                table: "Produtos");

            migrationBuilder.AlterColumn<string>(
                name: "ProdutoId",
                table: "Estoques",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddForeignKey(
                name: "FK_Estoques_Produtos_ProdutoId",
                table: "Estoques",
                column: "ProdutoId",
                principalTable: "Produtos",
                principalColumn: "ProdutoId");
        }
    }
}
