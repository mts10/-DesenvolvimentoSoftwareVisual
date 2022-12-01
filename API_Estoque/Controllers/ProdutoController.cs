using System.Collections.Generic;
using System.Linq;
using API_Estoque.Models;
using Microsoft.AspNetCore.Mvc;

namespace API_Estoque.Controllers
{
    [ApiController]
    [Route("api/produto")]
    public class ProdutoController : ControllerBase
    {
        private readonly DataContext _context;

        //Injeção de dependência - balta.io
        public ProdutoController(DataContext context) =>
            _context = context;

        private static List<Produto> produtos = new List<Produto>();

        // GET: /api/funcionario/listar
        [Route("listar")]
        [HttpGet]
        public IActionResult Listar() =>
            Ok(_context.Produtos.ToList());

        // POST: /api/funcionario/cadastrar
        [Route("cadastrar")]
        [HttpPost]
        public IActionResult Cadastrar([FromBody] Produto produto)
        {
            _context.Produtos.Add(produto);
            _context.SaveChanges();
            return Created("", produto);
        }

        // GET: /api/funcionario/buscar/1
        [Route("buscar/{id}")]
        [HttpGet]
        public IActionResult Buscar([FromRoute] int id)
        {
            //Expressão lambda
            Produto funcionario =
                _context.Produtos.Find(id);
            //IF ternário
            return funcionario != null ? Ok(funcionario) : NotFound();
        }

        // DELETE: /api/funcionario/deletar/1
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

        // PATCH: /api/funcionario/alterar
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