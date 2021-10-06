import { createSlice } from '@reduxjs/toolkit';

export const wishlistFailSlice = createSlice({
    name: "wishlistFail",
    initialState: {
        value: false,
    },
    reducers: {
        setWishlistFail: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setWishlistFail } = wishlistFailSlice.actions;

export default wishlistFailSlice.reducer;