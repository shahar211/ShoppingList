namespace ShoppingListHomeAssignment.Data
{
    public class SaveUserInfoRequest
    {
        public users UserInfo { get; set; }
        public List<string>? Categories { get; set; } 
    }
}
