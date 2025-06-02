import {configureStore} from '@reduxjs/toolkit'
import blogReducer from './blogSlice'
import authslice from './authslice';

export default configureStore({
    reducer: {
        blog: blogReducer,
        auth: authslice,
    },
});

