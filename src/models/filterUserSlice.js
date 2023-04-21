import { createSlice } from "@reduxjs/toolkit";
import { users } from '../constants';
import {filterByField} from "../utills";

const initialState = users;

export const filterUsersSlice = createSlice({
    name: 'filteredUsers',
    initialState,
    reducers: {
        filterUsersByName: (state, action) => filterByField(state, action.payload, 'name'),
        filterUsersByEmail: (state, action) => filterByField(state, action.payload, 'email'),
        filterUsersByAddress: (state, action) => filterByField(state, action.payload, 'address'),
        resetUsersFilters: (_, action) => action.payload,
    }
})

export const { filterUsersByName, filterUsersByEmail, filterUsersByAddress, resetUsersFilters } = filterUsersSlice.actions;

export default filterUsersSlice.reducer;
