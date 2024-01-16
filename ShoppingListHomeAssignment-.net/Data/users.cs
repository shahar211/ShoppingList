using System.ComponentModel.DataAnnotations.Schema;

namespace ShoppingListHomeAssignment.Data
{
    public class users
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("username")]
        public string username { get; set; }

        [Column("address")]
        public string? address { get; set; }

        [Column("email")]
        public string? email { get; set; }

        [Column("items")]
        public string? items { get; set; } 


    }

    [NotMapped]
    public class ItemsData
    {
        public List<string>? cheeses { get; set; }
        public List<string>? cleaningProducts { get; set; }
        public List<string>? vegetablesAndFruits { get; set; }
        public List<string>? meatAndFish { get; set; }
        public List<string>? bakery { get; set; }
    }

}
