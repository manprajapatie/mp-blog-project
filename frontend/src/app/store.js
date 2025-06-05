import {configureStore} from '@reduxjs/toolkit'
import blogSlice from '../redux/blogSlice'
import authSlice from '../redux/authSlice'

export default configureStore({
    reducer: {
        // blog: blogSlice,
        // auth: authSlice,
    },
});

