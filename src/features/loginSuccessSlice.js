import { createSlice } from '@reduxjs/toolkit';

export const loginSuccessSlice = createSlice({
    name: "loginSuccess",
    initialState: {
        value: false,
    },
    reducers: {
        setLoginSuccess: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setLoginSuccess } = loginSuccessSlice.actions;

export default loginSuccessSlice.reducer;