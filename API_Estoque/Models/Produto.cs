using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API_Estoque.Models
{
    public class Produto
    {
        public Produto() => CriadoEm = DateTime.Now;
        public int produtoId { get; set; }
        public string Nome { get; set; }
        public string Categoria { get; set; }
        public double Preco { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}