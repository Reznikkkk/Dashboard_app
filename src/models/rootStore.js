import { configureStore } from '@reduxjs/toolkit'
import tableReducer from './tableSlice';
import usersReducer from './usersSlice';
import gamesReducer from './gamesSlice';
import filterUsersReducer from "./filterUserSlice";
import isFilteredReducer from "./isFiltered";
import filterGamesReducer from "./filterGameSlice";

export const rootStore = configureStore({
    reducer: {
        tables: tableReducer,
        users: usersReducer,
        games: gamesReducer,
        filteredUsers: filterUsersReducer,
        filteredGames: filterGamesReducer,
        isFiltered: isFilteredReducer,
    },
})