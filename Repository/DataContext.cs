using Microsoft.EntityFrameworkCore;
using EstoqueWebApi.Models;

namespace EstoqueWebApi.Repository
{
  
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) :
            base(options)
        { }

        public DbSet<Produto> Produto { get; set; }
        public DbSet<CategoriaPrd> CategoriaPrd { get; set; }
        public DbSet<Consulta> Consulta { get; set; }
        
    }
}