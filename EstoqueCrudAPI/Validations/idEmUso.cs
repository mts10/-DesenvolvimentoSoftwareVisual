using System.ComponentModel.DataAnnotations;
using System.Linq;
using EstoqueWebApi.Models;

namespace EstoqueWebApi.Validations
{
    public class idEmUso : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            string id = (string)value;

            DataContext context =
                (DataContext)
                validationContext.
                GetService(typeof(DataContext));

            Produto resultado =
                context.Produtos.FirstOrDefault
                (
                    f => f.ProdutoId.Equals(id)
                );
            return resultado == null ?
                ValidationResult.Success :
                new ValidationResult("Esse produto já existe!");
        }
    }
}