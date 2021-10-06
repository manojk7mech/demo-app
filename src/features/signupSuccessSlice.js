import { createSlice } from '@reduxjs/toolkit';

export const signupSuccessSlice = createSlice({
    name: "signupSuccess",
    initialState: {
        value: false,
    },
    reducers: {
        setSignupSuccess: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setSignupSuccess } = signupSuccessSlice.actions;

export default signupSuccessSlice.reducer;