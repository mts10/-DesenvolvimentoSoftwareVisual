using System;
using System.ComponentModel.DataAnnotations;

namespace API_Estoque.Models
{
    public class Estoque
    {
        public Estoque() => CriadoEm = DateTime.Now;
        [Key]
        public int EstoqueId { get; set; }
        public int Quantidade { get; set; }
        public int ProdutoId { get; set; }
        public Produto Produto { get; set; }
        public DateTime CriadoEm { get; set; }
        public string Centro { get; set; }
    }
}