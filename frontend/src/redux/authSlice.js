import { configureStore } from "@reduxjs/toolkit";

const authSlice = configureStore({
    name: "auth",
    initialStage:{
        isAuthenticated: false,
    },
    reducer: {
        login: (state)=>{
            state.isAuthenticated = true;
        },
        logout: (state)=>{
            state.isAuthenticated = false;
        },
    },
})

export const {login, logout} = authSlice.action;
export default authSlice.reducer