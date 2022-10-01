using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace EstoqueWebApi.Models
{
    public class CategoriaPrd
    {
        public int CatId { get; set; }
        [Required(ErrorMessage = "O campo da categoria é obrigatório!")]
        public string Categoria { get; set; }
      [Range(
            0,
            1000000,
            ErrorMessage = "A quantidade máxima é de 1.000.000!"
        )]
        public int Quantidade{ get; set; }

        public List<Produto> Produtos { get; set; }


        public CategoriaPrd(string Categoria, int Quantidade) {
            this.Categoria = Categoria;
            this.Quantidade = Quantidade;
        }
    }
}