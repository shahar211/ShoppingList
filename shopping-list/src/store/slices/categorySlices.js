import { createSlice, createAction } from '@reduxjs/toolkit';
import { apiCallBegan } from '../api';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        loading: true,
        error: null,
        selectedCategory: "",
        productInput: "",
        insertSucess: false,
    },
    reducers: {
        // Action to set loading state
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        // Action to set error state
        setError: (state, action) => {
            state.error = action.payload;
        },
        // Action to set categories list
        setCategories: (state, action) => {
            state.list = action.payload;
            state.loading = false;
            state.error = null;
        },
        setInsert: (state, action) => {
            if (action.payload === "Product added successfully") {
                state.insertSucess = !state.insertSucess;
            }
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setProductInput: (state, action) => {
            state.productInput = action.payload
        },
    },
});

// Export action creators
export const { setLoading, setError, setCategories, setSelectedCategory, setProductInput, setInsert } = categoriesSlice.actions;

// Export reducer
export default categoriesSlice.reducer;

const url = "/ShoppingList";


// Your async action for fetching the shopping list
export const fetchShoppingList = () =>
    apiCallBegan({
        url,
        method: 'GET',
        onStart: setLoading.type,
        onSuccess: setCategories.type,
        onError: setError.type,
    });

export const insertToShoppingList = ({ selectedCategory, inputValue }) =>
    apiCallBegan({
        url: `${url}/AddItemToCategory?productName=${inputValue}&columnName=${selectedCategory}`,
        method: 'POST',
        onSuccess: setInsert.type,
    });

