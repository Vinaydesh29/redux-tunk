import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0
}
const count = createSlice({
    name:"conut",
    initialState,
    reducers:{
        increBy1 :(state)=>{
            state.value +=1
        },
        decBy1 : (state)=>{
            state.value -=1
        },
        increBy5 : (state)=>{
            state.value +=5
        },
        incre : (state,action)=>{
            state.value+= action.payload
        }
    }
})
export const {increBy1,decBy1,increBy5,incre}= count .actions
export default count.reducer