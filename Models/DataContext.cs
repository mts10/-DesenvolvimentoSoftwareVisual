using Microsoft.EntityFrameworkCore;

namespace EstoqueWebApi.Models
{
  
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) :
            base(options)
        { }

        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Estoque> Estoques { get; set; }
        
    }
}