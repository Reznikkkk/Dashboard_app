import { createSlice } from "@reduxjs/toolkit";
import { games } from '../constants';
import {filterByField} from "../utills";

const initialState = games;

export const filterGamesSlice = createSlice({
    name: 'filteredGames',
    initialState,
    reducers: {
        filterGamesByName: (state, action) => filterByField(state, action.payload, 'name'),
        filterGamesByCategory: (state, action) => filterByField(state, action.payload, 'gameCategory'),
        filterGamesByDate: (state, action) => filterByField(state, action.payload, 'createdDate'),
        resetGamesFilters: (_, action) => action.payload,
    }
});

export const { filterGamesByName, filterGamesByCategory, filterGamesByDate, resetGamesFilters } = filterGamesSlice.actions;

export default filterGamesSlice.reducer;
