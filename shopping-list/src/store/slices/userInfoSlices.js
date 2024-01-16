import { createSlice, createAction } from '@reduxjs/toolkit';
import { apiCallBegan } from '../api';

// Slice for user information
const userInfoSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: [],
        loading: true,
        saveInfoSuccess: false,
        error: null,

    },
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload ;

        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },


    },
});

// Export action creators
export const {
    setUserInfo,
    setLoading,
    setError
} = userInfoSlice.actions;

// Export reducer
export default userInfoSlice.reducer;


const userUrl = '/user'; // Adjust the API endpoint as needed

export const fetchUserInfo = ({ userData }) => {

  
    return apiCallBegan({
      url: `${userUrl}/SaveUserInfo`,
      method: 'POST',
      data: userData,
      onStart: setLoading.type,
      onSuccess: setUserInfo.type,
      onError: setError.type,
    });
  };
  
