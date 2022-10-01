using System.Collections.Generic;
using System.Linq;
using EstoqueWebApi.Models;
using EstoqueWebApi.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace EstoqueWebApi.Controllers
{
    [ApiController]
    [Route("produto")]
    public class ProdutoController : ControllerBase
    {
        private readonly DataContext _context;
        public ProdutoController(DataContext context) => _context = context;

        [Route("cadastrar")]
        [HttpPost]
        public IActionResult CadastrarProduto([FromBody] Produto produto)
        {
            _context.Produto.Add(produto);
            _context.SaveChanges();
            return Created("", produto); 
        }
        [Route("listar")]
        [HttpGet]
        public IActionResult ListarProdutos()
        {
            var produtos = _context.Produto
                .Include(produto => produto.Produto)
                .Include(produto => produto.CategoriaPrd)
                .ToList();
            
            return Ok(produtos);
        }
    }
    
}