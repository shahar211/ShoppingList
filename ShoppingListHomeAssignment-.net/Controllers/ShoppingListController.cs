using Microsoft.AspNetCore.Mvc;
using ShoppingListHomeAssignment.Data;

namespace Home_Assignment_Shahar_Eliyahu.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingListController : ControllerBase
    {
        private readonly PostgresSqlDbContext _dbContext;

        public ShoppingListController(PostgresSqlDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<categories>> GetAllCategories()
        {
            try
            {
                var categories = _dbContext.categories.ToList();
                return Ok(categories);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest();
            }
        }


        [HttpPost]
        [Route("AddItemToCategory")]
        public async Task<IActionResult> AddItemToCategory(string productName, string columnName)
        {
            try
            {
                var entityType = _dbContext.Model.FindEntityType(typeof(categories));

                var category = new categories();

                // Use reflection to set the value of the specified property with case-insensitive comparison
                var property = typeof(categories)
                    .GetProperties()
                    .FirstOrDefault(p => p.Name.Equals(columnName, StringComparison.OrdinalIgnoreCase));

                if (property != null)
                {
                    property.SetValue(category, productName);
                }
                else
                {
                    return BadRequest($"Invalid columnName: {columnName}");
                }

                // Add the product to the DbContext
                _dbContext.categories.Add(category);

                // Save changes to the database
                await _dbContext.SaveChangesAsync();

                return Ok("Product added successfully");
            }
            catch (Exception ex)
            {
                // Log the exception or handle it as needed
                return BadRequest($"Failed to add product: {ex.Message}");
            }
        }


    }
}
