using Microsoft.AspNetCore.Mvc;
using ShoppingListHomeAssignment.Data;
using Newtonsoft.Json; 

namespace ShoppingListHomeAssignment.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class UserController : Controller
    {

        private readonly PostgresSqlDbContext _dbContext;

        public UserController(PostgresSqlDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        [Route("SaveUserInfo")]
        [HttpPost]
        public async Task<IActionResult> SaveUserInfo([FromBody] users userInfo)
        {
            if (userInfo == null)
            {
                return BadRequest("Invalid user information");
            }

            try
            {
                    var userEntity = new users
                    {
                        username = userInfo.username,
                        address = userInfo.address,
                        email = userInfo.email,
                        items = userInfo.items 
                    };

                _dbContext.users.Add(userEntity);
                    await _dbContext.SaveChangesAsync();

                return Ok("User information saved successfully");
            }
            catch (Exception ex)
            {
                // Log the exception or handle it as needed
                return StatusCode(500, "Internal server error");
            }
        }

    }
}
