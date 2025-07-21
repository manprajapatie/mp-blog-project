import {configureStore} from '@reduxjs/toolkit'
import recipeReducer from '../features/recipes/recipeSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        recipes: recipeReducer,
        auth: authReducer, //we can name whatever we want, just we have to import thinks with same name
    },
});

