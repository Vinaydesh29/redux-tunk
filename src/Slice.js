import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const FetchData = createAsyncThunk('ApiStore',async()=>{
       const res = await fetch("https://jsonplaceholder.typicode.com/posts")
       const data = await res.json()
       return data
})
const ApiSlice = createSlice({
    name: "api",
    initialState:{
        status:"",
        user:[],
        error:null
    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(FetchData.pending,(state)=>{
          state.status= "Loading"
        }).addCase(FetchData.fulfilled,(state,action)=>{
            state.status="success"
            state.user = action.payload
        }).addCase(FetchData.rejected,(state,action)=>{
            state.error = action.error.message
        })

    }
})

export default ApiSlice.reducer