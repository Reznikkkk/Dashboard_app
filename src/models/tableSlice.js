import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Users',
}

export const tableSlice = createSlice({
    name: 'tables',
    initialState,
    reducers: {
        changeTable: (state, action) => {
            state.name = action.payload;
        }
    }
})

export const { changeTable } = tableSlice.actions;

export default tableSlice.reducer;
