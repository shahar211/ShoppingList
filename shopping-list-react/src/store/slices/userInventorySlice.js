import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../api';


const userInventorySlice = createSlice({
  name: 'userInventory',
  
  initialState: {
    list: {}, // Object to store categories and their corresponding items
    loading: true,
  },
  
  reducers: {
    addProduct: (state, action) => {
      // Extract category and product from the action payload
      const { selectedCategory, item } = action.payload;
      // If the category doesn't exist in the list, create a new array for it
      state.list[selectedCategory] = state.list[selectedCategory] || [];
      
      // Add the product to the category
      state.list[selectedCategory].push(item);

      state.loading=false;

    },
  },
});

export const { addProduct } = userInventorySlice.actions;

export default userInventorySlice.reducer;

