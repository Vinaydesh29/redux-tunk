import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("ApiTunk/fetchData",async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = response.json()
    return data

})
const apiSlice = createSlice({
    name: "fetchData",
    initialState: {
        user:[],
        status: "",
        error:null
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(fetchData.pending,(state)=>{
            state.status = "Loading"
        });
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.status="success";
            state.user = action.payload
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.status="failed";
            state.error = action.error.message
        })
    }


})
export default apiSlice.reducer