using System.ComponentModel.DataAnnotations;

namespace EstoqueWebApi.Models
{
    public class CategoriaPrd
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "O campo nome é obrigatório!")]
        public string Name { get; set; }
        [Required(ErrorMessage = "O campo da categoria é obrigatório!")]
        public string Categoria { get; set; }

        public CategoriaPrd(string Name, string Categoria) {
            this.Name = Name;
            this.Categoria = Categoria;
        }
    }
}