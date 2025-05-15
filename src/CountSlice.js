import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value : 0
}

const CounterSlice = createSlice({
    name: "count",
    initialState,
    reducers:{
        inceBy1:(state)=>{
            state.value += 1
        },
        inceBy5:(state)=>{
            state.value +=5
        },
        decBy1 :(state)=>{
            state.value -=1
        },
        reset :(state)=>{
            state.value =initialState.value
        },
        update:(state,action)=>{
            state.value += action.payload
        }

    }
})
export const {inceBy1,inceBy5,decBy1,reset,update} = CounterSlice.actions
export default CounterSlice.reducer