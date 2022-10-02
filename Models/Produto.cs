using System;
using System.ComponentModel.DataAnnotations;
using EstoqueWebApi.Validations;

namespace EstoqueWebApi.Models
{
    public class Produto
    {
        public Produto() => CriadoEm = DateTime.Now;
        [idEmUso]
        public string ProdutoId { get; set; }
        [Required(ErrorMessage = "O campo nome é obrigatório!")]
        public string Nome { get; set; }
        [Required(ErrorMessage = "O campo categoria é obrigatório!")]
        public string Categoria { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}