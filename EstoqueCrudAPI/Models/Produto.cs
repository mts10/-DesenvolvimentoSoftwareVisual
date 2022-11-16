using System;
using System.ComponentModel.DataAnnotations;
using EstoqueWebApi.Validations;

namespace EstoqueWebApi.Models
{
    public class Produto
    {
        public Produto() => CriadoEm = DateTime.Now;
        //[idEmUso]
        [Key]
        public int ProdutoId { get; set; }
        public string Nome { get; set; }
        public string Categoria { get; set; }
        public double Preco { get; set; }
        public DateTime CriadoEm { get; set; }

        public Produto(int ProdutoId, string Nome, string Categoria, double Preco, DateTime CriadoEm) {
            this.ProdutoId = ProdutoId;
            this.Nome = Nome;
            this.Categoria = Categoria;
            this.Preco = Preco;

            this.CriadoEm = DateTime.Now;
        }
    }
}