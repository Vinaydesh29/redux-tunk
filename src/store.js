import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from'./Slice.js'
import count from './CountSlice.js'
const store = configureStore({
    reducer:{
        ApiStore:ApiSlice,
        counter :count
    }
})

export default store