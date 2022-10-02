using System.Collections.Generic;
using System.Linq;
using EstoqueWebApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace EstoqueWebApi.Controllers
{
    [ApiController]
    [Route("api/produto")]
    public class ProdutoController : ControllerBase
    {
        private readonly DataContext _context;

        public ProdutoController(DataContext context) =>
            _context = context;

        private static List<Produto> produtos = new List<Produto>();

        [Route("listar")]
        [HttpGet]
        public IActionResult Listar() => Ok(_context.Produtos.ToList());

        [Route("cadastrar")]
        [HttpPost]
        public IActionResult Cadastrar([FromBody] Produto produto)
        {
            _context.Produtos.Add(produto);
            _context.SaveChanges();
            return Created("", produto);
        }
        
        [Route("buscar/{id}")]
        [HttpGet]
        public IActionResult Buscar([FromRoute] int id)
        {
            Produto produto =
                _context.Produtos.FirstOrDefault
            (
                f => f.ProdutoId.Equals(id)
            );
            return produto != null ? Ok(produto) : NotFound();
        }

        [Route("deletar/{id}")]
        [HttpDelete]
        public IActionResult Deletar([FromRoute] int id)
        {
            Produto produto =
                _context.Produtos.Find(id);
            if (produto != null)
            {
                _context.Produtos.Remove(produto);
                _context.SaveChanges();
                return Ok(produto);
            }
            return NotFound();
        }

        [Route("alterar")]
        [HttpPatch]
        public IActionResult Alterar([FromBody] Produto produto)
        {
            _context.Produtos.Update(produto);
            _context.SaveChanges();
            return Ok(produto);
        }
    }
}