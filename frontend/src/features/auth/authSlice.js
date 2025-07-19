import { createSlice } from "@reduxjs/toolkit";

const userFromStorage = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: userFromStorage || null,
    isAuthenticated: !!userFromStorage,
    //!! it is use to clean code, it give us true or false(if null it automaticly convert it into false)
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.error = null;
            localStorage.setItem("user", JSON.stringify(action.payload))
            //localStorage Take data in String only
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
            localStorage.removeItem("user") //remove user when logout
        },
        setError: (state, action) =>{
            state.error = action.payload
        }
    }
})

export const {login, logout, setError} = authSlice.actions
export default authSlice.reducer;