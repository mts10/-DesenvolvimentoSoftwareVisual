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

        // GET: /api/produto/listar
        [Route("listar")]
        [HttpGet]
        public IActionResult Listar() => Ok(_context.Produtos.ToList());

        // POST: /api/produto/cadastrar
        [Route("cadastrar")]
        [HttpPost]
        public IActionResult Cadastrar([FromBody] Produto produto)
        {
            _context.Produtos.Add(produto);
            _context.SaveChanges();
            return Created("", produto);
        }

        // GET: /api/produto/buscar/123
        [Route("buscar/{categoria}")]
        [HttpGet]
        public IActionResult Buscar([FromRoute] string categoria)
        {
            //Expressão lambda
            Produto produto = _context.Produtos.FirstOrDefault
            (
                f => f.Categoria.Equals(categoria)
            );
            //IF ternário
            return produto != null ? Ok(produto) : NotFound();
        }

        // DELETE: /api/produto/deletar/123
        [Route("deletar/{categoria}")]
        [HttpDelete]
        public IActionResult Deletar([FromRoute] string categoria)
        {
            Produto produto = produtos.FirstOrDefault
            (
                f => f.Categoria.Equals(categoria)
            );
            if (categoria != null)
            {
                produtos.Remove(produto);
                return Ok(produto);
            }
            return NotFound();
        }

        // PATCH: /api/produto/alterar
        [Route("alterar")]
        [HttpPatch]
        public IActionResult Alterar([FromBody] Produto produto)
        {
            Produto produtoBuscado = produtos.FirstOrDefault
            (
                f => f.Categoria.Equals(produto.Categoria)
            );
            if (produtoBuscado != null)
            {
                produtoBuscado.Nome = produto.Nome;
                return Ok(produto);
            }
            return NotFound();
        }
    }
}