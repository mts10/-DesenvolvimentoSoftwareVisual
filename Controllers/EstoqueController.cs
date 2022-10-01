using System.Collections.Generic;
using System.Linq;
using EstoqueWebApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace EstoqueWebApi.Controllers
{
    [ApiController]
    [Route("estoque")]
    public class EstoqueController : ControllerBase
    {
        private readonly DataContext _context;
        public EstoqueController(DataContext context) => _context = context;

        [Route("cadastrar")]
        [HttpPost]
        public IActionResult CadastrarProduro([FromBody] Estoque estoque)
        {
            _context.Estoque.Add(estoque);
            _context.SaveChanges();
            return Created("", estoque); 
        }
        [Route("listar")]
        [HttpGet]
        public IActionResult ListarProdutos()
        {
            var estoques = _context.Estoque
                .Include(estoque => estoque.Produto)
                .Include(estoque => estoque.Quantidade)
                .Include(estoque => estoque.CategoriaPrd)
                .ToList();
            
            return Ok(estoques);
        }




    }
    
}