using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace EstoqueWebApi.Models
{
    public class CategoriaPrd
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "O campo nome é obrigatório!")]
        public string Name { get; set; }
        [Required(ErrorMessage = "O campo da categoria é obrigatório!")]
        public string Categoria { get; set; }
      [Range(
            0,
            1000000,
            ErrorMessage = "A quantidade máxima é de 1.000.000!"
        )]
        public int Quantidade{ get; set; }


        public CategoriaPrd(string Name, string Categoria, int Quantidade) {
            this.Name = Name;
            this.Categoria = Categoria;
            this.Quantidade = Quantidade;
        }
    }
}