import { createSlice } from '@reduxjs/toolkit';

export const addToCartSlice = createSlice({
    name: "addToCart",
    initialState: {
        value: false,
    },
    reducers: {
        setAddToCart: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setAddToCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;