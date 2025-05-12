import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from'./Slice.js'
const store = configureStore({
    reducer:{
        ApiStore:ApiSlice
    }
})

export default store