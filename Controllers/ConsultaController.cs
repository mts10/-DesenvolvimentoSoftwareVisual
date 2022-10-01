using Microsoft.AspNetCore.Mvc;
using System.Linq;
using EstoqueWebApi.Models;
using EstoqueWebApi.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace EstoqueWebApi.Controllers
{
    
    [Route("api/consulta")]
    [ApiController]
    public class ConsultaController : ControllerBase
    {
        private readonly DataContext _context;

         public ConsultaController(DataContext context) => _context = context;

         [Route("api/cadastrar")]
        [HttpPost]
        public IActionResult CadastrarProduto([FromBody] Consulta consulta)
        {
            _context.Consulta.Add(consulta);
            _context.SaveChanges();
            return Created("", consulta); 
        }
        [Route("listar")]
        [HttpGet]
        public IActionResult ListarAgendamentos()
        {
            var consultas = _context.Consulta
                .Include(consulta => consulta.ProdutoId)
                .Include(consulta => consulta.Categoria)
                .ToList();
            
            return Ok(consultas);
        }
    }
}