using System;
using System.ComponentModel.DataAnnotations;

namespace EstoqueWebApi.Models
{
    public class Estoque
    {
        public int EstoqueId { get; set; }
        [Range(
            0,
            1000000,
            ErrorMessage = "A quantidade máxima é de 1.000.000!"
        )]
        public int Quantidade { get; set; }
    }
}