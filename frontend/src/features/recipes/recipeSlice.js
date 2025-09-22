import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { recipes as staticData } from "../../constants/recipes";

//api call throgh reduxToolkit
export const fetchApi = createAsyncThunk("fetchApi", async () => {
    const response = await fetch('https://dummyjson.com/recipes')
    const data = await response.json();
    return data.recipes;
})


const initialState = {
    all: staticData,
    isLoading: false,
    isError: false,
    favorites: [],
};
console.log(`initialState >>>>>>>>>>>>> ${initialState}`);

const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {

        addToFavorites: (state, action) => {
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload)
            }
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter((id) => id !== action.payload);
        },

    },

    extraReducers: (builder) => {
        builder.addCase(fetchApi.fulfilled, (state, action) => {
            state.all = action.payload
        });
        builder.addCase(fetchApi.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchApi.rejected, (state, action) => {
            console.log('Error in Api call (in redux)', action.payload);

        });
    },

});

export const { setRecipes, addToFavorites, removeFromFavorites } = recipeSlice.actions;
export default recipeSlice.reducer;