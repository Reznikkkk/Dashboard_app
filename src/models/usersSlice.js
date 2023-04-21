import { createSlice } from "@reduxjs/toolkit";
import { users } from '../constants';

const initialState = users;

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        createUser: (state, action) => {
             state.push(action.payload);
        },
        updateUser: (state, action) => {
            const index = state.findIndex((user) => user.id === action.payload.id);
            state.splice(index, 1, action.payload);
        },
        deleteUser: (state, action) => {
            return state.filter((user) => user.id !== action.payload);
        },
    }
})

export const { createUser, updateUser, deleteUser, filterByName } = usersSlice.actions;

export default usersSlice.reducer;
