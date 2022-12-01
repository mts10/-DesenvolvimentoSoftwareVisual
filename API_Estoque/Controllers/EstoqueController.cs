using System.Collections.Generic;
using System.Linq;
using API_Estoque.Models;
using Microsoft.AspNetCore.Mvc;

namespace API_Estoque.Controllers
{
    [ApiController]
    [Route("api/estoque")]
    public class EstoqueController : ControllerBase
    {
        private readonly DataContext _context;

        public EstoqueController(DataContext context) =>
            _context = context;

        private static List<Estoque> estoques = new List<Estoque>();

        [Route("listar")]
        [HttpGet]
        public IActionResult Listar() =>
            Ok(_context.Estoques.ToList());

        [Route("cadastrar")]
        [HttpPost]
        public IActionResult Cadastrar([FromBody] Estoque estoque)
        {
            _context.Estoques.Add(estoque);
            _context.SaveChanges();
            return Created("", estoque);
        }

        [Route("buscar/{id}")]
        [HttpGet]
        public IActionResult Buscar([FromRoute] int id)
        {
            //Expressão lambda
            Estoque estoque =
                _context.Estoques.Find(id);
            //IF ternário
            return estoque != null ? Ok(estoque) : NotFound();
        }

        [Route("deletar/{id}")]
        [HttpDelete]
        public IActionResult Deletar([FromRoute] int id)
        {
            Estoque estoque =
                _context.Estoques.Find(id);
            if (estoque != null)
            {
                _context.Estoques.Remove(estoque);
                _context.SaveChanges();
                return Ok(estoque);
            }
            return NotFound();
        }

        [Route("alterar")]
        [HttpPatch]
        public IActionResult Alterar([FromBody] Estoque estoque)
        {
            _context.Estoques.Update(estoque);
            _context.SaveChanges();
            return Ok(estoque);
        }
    }
}