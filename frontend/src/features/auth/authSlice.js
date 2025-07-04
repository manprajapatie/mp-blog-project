import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: null,
    error: null,
};

const authSlice = createSlice({
    name: auth,
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.error = null;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        },
        setError: (state, action) =>{
            state.error = action.payload
        }
    }
})

export const {login, logout, setError} = authSlice.reducer
export default authSlice.reducer;