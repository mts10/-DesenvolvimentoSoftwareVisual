using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using EstoqueWebApi.Validations;

namespace EstoqueWebApi.Models
{
    public class Produto
    {
        [idEmUso]
        public string Id { get; set; }
        [Required(ErrorMessage = "O campo nome é obrigatório!")]
        public string Nome { get; set; }
        [Required(ErrorMessage = "O campo preço é obrigatório!")]
        public float Preço { get; set; }
        public DateTime CriadoEm { get; set; }

        public List<Produto> Produto { get; set; }
    
    public Produto(string Nome, float Preço)
    {
        this.Nome = Nome;
        this.Preço = Preço;
        this.CriadoEm = DateTime.Now;
    }

    }
}