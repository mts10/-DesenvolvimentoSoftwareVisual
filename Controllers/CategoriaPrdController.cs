using Microsoft.AspNetCore.Mvc;
using EstoqueWebApi.Models;
using EstoqueWebApi.Repository;

namespace EstoqueWebApi.Controllers
{
    [Route("consulta/categoria")]
    [ApiController]
    public class CategoriaPrdController : ControllerBase
    {
        private readonly DataContext _context;

        public CategoriaPrdController (DataContext context) => _context = context;

        [Route("criar")]
        [HttpPost]
        public IActionResult CriarNovaCategoria([FromBody] CategoriaPrd categoria)
        {
            _context.CategoriaPrd.Add(categoria);
            _context.SaveChanges();
            return Created("", categoria);
        }
    }
}