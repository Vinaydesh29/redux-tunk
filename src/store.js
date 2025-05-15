import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CountSlice";
import Api from "./Slice.js";
const store = configureStore({
    reducer:{
       count: CounterSlice,
       ApiTunk:Api
    }
})

export default store