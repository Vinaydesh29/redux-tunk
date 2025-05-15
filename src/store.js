import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CountSlice";
const store = configureStore({
    reducer:{
       count: CounterSlice
    }
})

export default store