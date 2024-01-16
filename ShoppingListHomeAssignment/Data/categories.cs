using System.ComponentModel.DataAnnotations.Schema;

public class categories
{
    [Column("id")]
    public int Id { get; set; }

    [Column("CleaningProducts")]
    public string? CleaningProducts { get; set; }

    [Column("Cheeses")]
    public string? Cheeses { get; set; }

    [Column("VegetablesAndFruits")]
    public string? VegetablesAndFruits { get; set; }

    [Column("MeatAndFish")]
    public string? MeatAndFish { get; set; }

    [Column("Bakery")]
    public string? Bakery { get; set; }
}
