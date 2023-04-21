import { createSlice } from "@reduxjs/toolkit";
import { games } from "../constants";

const initialState = games;

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        createGame: (state, action) => {
            state.push(action.payload);
        },
        updateGame: (state, action) => {
            const index = state.findIndex((game) => game.id === action.payload.id);
            state.splice(index, 1, action.payload);
        },
        deleteGame: (state, action) => {
            return state.filter((game) => game.id !== action.payload);
        },
    }
})

export const { createGame, updateGame, deleteGame } = gamesSlice.actions;

export default gamesSlice.reducer;
