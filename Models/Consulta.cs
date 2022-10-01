using System;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;

namespace EstoqueWebApi.Models
{
    public class Consulta
    {
        public int Id { get; set; }
        [DataType(DataType.Date, ErrorMessage="Data em formato inválido")]
        [DisplayFormat(DataFormatString = "{yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime ConsultationDate { get; set; }
        [Required(ErrorMessage = "O produto é obrigatório")]
        public int ProdutoId { get; set; }
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public Produto Produto { get; set; }
        [Required(ErrorMessage = "Informe uma categoria")]
        public int  Categoria { get; set; }
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public CategoriaPrd CategoriaPrd { get; set; }
        

        public Consulta(DateTime ConsultationDate, int ProdutoId, int Categoria) {
            this.ConsultationDate = ConsultationDate;
            this.ProdutoId = ProdutoId;
            this.Categoria = Categoria;
            
        }
    }
}