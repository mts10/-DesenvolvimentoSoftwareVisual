using System;
using System.ComponentModel.DataAnnotations;

namespace EstoqueWebApi.Models
{
    public class Quantidade
    {
         public int QuantidadeId { get; set; }
        [Range(
            0,
            1000000,
            ErrorMessage = "A quantidade máxima é de 1.000.000!"
        )]
        public int Quantidade { get; set; }
    }
}