import { createSlice } from '@reduxjs/toolkit';

export const theUserSlice = createSlice({
    name: "theUser",
    initialState: {
        value: { user: null, id: null }
    },
    reducers: {
        setTheUser: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setTheUser } = theUserSlice.actions;

export default theUserSlice.reducer;