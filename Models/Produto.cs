using System;
using System.ComponentModel.DataAnnotations;
using EstoqueWebApi.Validations;

namespace EstoqueWebApi.Models
{
    public class Produto
    {
        [idEmUso]
        public string ProdutoId { get; set; }
        [Required(ErrorMessage = "O campo nome é obrigatório!")]
        public string Nome { get; set; }
        [Required(ErrorMessage = "O campo preço é obrigatório!")]
        public float Preço { get; set; }
        public DateTime CriadoEm { get; set; }
    
    public Produto(string Nome, float Preço)
    {
        this.Nome = Nome;
        this.Preço = Preço;
    }

    }
}