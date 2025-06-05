import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialStage = {
    all: [],
    favorites: [],
};

const recipeSlice = createSlice({
    name: 'receipes',
    initialStage,
    reducers: {
        setReceipes: (state, action) => {
            state.all = action.payload;
        },
        addToFavorites: (state, action) => {
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload)
            }
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter((id) => id !== action.payload);
        },
    },
});

export const {setReceipes, addToFavorites, removeFromFavorites} = recipeSlice.actions;
export default recipeSlice.reducer;