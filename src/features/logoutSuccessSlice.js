import { createSlice } from '@reduxjs/toolkit';

export const logoutSuccessSlice = createSlice({
    name: "logoutSuccess",
    initialState: {
        value: false,
    },
    reducers: {
        setLogoutSuccess: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setLogoutSuccess } = logoutSuccessSlice.actions;

export default logoutSuccessSlice.reducer;