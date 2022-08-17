import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../auth/authSlice'
import { gifsSlice } from './gifsSlice'



export const store = configureStore({
    reducer: {
        gifs: gifsSlice.reducer,
        auth: authSlice.reducer,
    },
})