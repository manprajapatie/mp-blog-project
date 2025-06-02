import { createSlice } from "@reduxjs/toolkit";

const blogslice = createSlice({
    name: 'blog',
    initialState: {
        blogs: [],
    },
    reducers: {
        setBlogs: (state, action) =>{
            state.blogs = action.payload
        },
    },
})

export const {setBlogs} = blogslice.actions;
export default blogslice.reducer;