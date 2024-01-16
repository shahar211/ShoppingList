import { configureStore} from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlices'
import userInventoryReducer from './slices/userInventorySlice'; 
import userInfoSliceReducer from './slices/userInfoSlices'; 
import api from "./middleware/api";

const store = configureStore({
  reducer: {
    categoryReducer,
    userInventoryReducer,
    userInfoSliceReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api,
    
],

});

export default store;
