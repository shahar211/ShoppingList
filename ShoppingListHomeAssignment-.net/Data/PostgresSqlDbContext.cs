using Microsoft.EntityFrameworkCore;

namespace ShoppingListHomeAssignment.Data
{
    public class PostgresSqlDbContext : DbContext
    {
        public PostgresSqlDbContext(DbContextOptions<PostgresSqlDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //create and init the tables on start
            modelBuilder.Entity<categories>().ToTable("categories");
            modelBuilder.Entity<users>().ToTable("users"); modelBuilder.Entity<categories>().HasData(
            new categories
        {
            Id = 1,
            CleaningProducts = "מסיכת פנים",
            Cheeses = "גבינת רוקפור",
            VegetablesAndFruits = "תפוחים ודובדבנים",
            MeatAndFish = "דג סלמון",
            Bakery = "לחמניה"
        },
            new categories
        {
            Id = 2,
            CleaningProducts = "חומרי ניקוי קטנים",
            Cheeses = "מוצרלה דנמארק",
            VegetablesAndFruits = "אבוקדו וקיווי",
            MeatAndFish = "סטייק טונה",
            Bakery = "פיצה מרגריטה"
        },
            new categories
        {
            Id = 3,
            CleaningProducts = "מטליות נקיון",
            Cheeses = "גבינת פטה",
            VegetablesAndFruits = "תפוחים ודובדבנים",
            MeatAndFish = "סלמון",
            Bakery = "לחם אחיד"
        },
            new categories
        {
            Id = 4,
            CleaningProducts = "מנקה רצפות",
            Cheeses = "קשקבל",
            VegetablesAndFruits = "גזרים ותפוחים",
            MeatAndFish = "סטייק פילה",
            Bakery = "בגט"
        },
            new categories
        {
            Id = 5,
            CleaningProducts = "שטיח שטוח",
            Cheeses = "צ׳דר",
            VegetablesAndFruits = "עגבניות ואבטיח",
            MeatAndFish = "קנייה",
            Bakery = "פירותי דג עם תנור"
        },
            new categories
        {
            Id = 6,
            CleaningProducts = "נוזל ניקוי",
            Cheeses = "מוצרלה",
            VegetablesAndFruits = "בננות ותפוזים",
            MeatAndFish = "כריך דנמארק",
            Bakery = "פירותי דג קפואים"
        }
    );


        }

        public DbSet<categories> categories { get; set; }
        public DbSet<users> users { get; set; }
    }
}
