import {configureStore} from '@reduxjs/toolkit'
import blogSlice from './blogSlice'
import authSlice from './authSlice'

export default configureStore({
    reducer: {
        blog: blogSlice,
        auth: authSlice,
    },
});

