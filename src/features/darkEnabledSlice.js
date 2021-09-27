import { createSlice } from '@reduxjs/toolkit';

export const darkEnabledSlice = createSlice({
    name: "darkEnabled",
    initialState: {
        value: false,
    },
    reducers: {
        setDarkEnabled: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setDarkEnabled } = darkEnabledSlice.actions;

export default darkEnabledSlice.reducer;