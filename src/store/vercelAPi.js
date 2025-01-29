import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Enum from "../config";
import axios from "axios";


export const getVercel=createAsyncThunk('getVercel',async ()=>{
    const response = await axios.get(Enum.vercel_url, {
        headers: {
          Authorization: `Bearer ${Enum.vercel_Token}` ,// Bearer ile token arasında boşluk önemli!
            
            
        }
      });
      return response.data.projects
})


const initialState ={
    data:{},
    status:''
}
const api=createSlice({
    name:'api',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getVercel.fulfilled,(state,action)=>{
            state.data=action.payload
            state.status='Success'
        })
        builder.addCase(getVercel.rejected,(state)=>{
            state.data=null
            state.status='Fail'
        })
        builder.addCase(getVercel.pending,(state)=>{
            state.status='Loading',
            state.data=null
        })
    }
})

export default api.reducer