using System;

namespace EstoqueWebApi.Models
{
    public class Produto
    {
        public Produto() => CriadoEm = DateTime.Now;
        public int ProdutoId { get; set; }
        public string Nome { get; set; }
        public string Categoria { get; set; }
        public int Quantidade { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}