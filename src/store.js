import { configureStore } from "@reduxjs/toolkit";
import apiSlice from './Slice.js'
const store = configureStore({
    reducer:{
        ApiTunk:apiSlice
    }
})
export default store;