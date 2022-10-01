using Microsoft.EntityFrameworkCore;

namespace EstoqueWebApi.Models
{
  
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) :
            base(options)
        { }

        public DbSet<Produto> Produto { get; set; }
        public DbSet<Estoque> Estoque { get; set; }
        public DbSet<CategoriaPrd> CategoriaPrd { get; set; }
        
    }
}