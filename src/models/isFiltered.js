import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const isFilteredSlice = createSlice({
    name: 'isFiltered',
    initialState,
    reducers: {
        toggleFiltered: (state, action) => {
            return action.payload;
        }
    }
})

export const { toggleFiltered } = isFilteredSlice.actions;

export default isFilteredSlice.reducer;
