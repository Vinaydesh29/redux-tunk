import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk('ApiStore/fetchData' ,async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data
})
 const ApiSlice = createSlice({
    name:"api",
    initialState:{
        status:"",
        user:[],
        error:null
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.status = "loading"
        });
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.status = "success"
            state.user = action.payload
        });
        builder.addCase(fetchData.rejected,(state,action)=>{
           state.status = "failed"
           state.error = action.error.message
        })
    }
 })
 export default ApiSlice.reducer