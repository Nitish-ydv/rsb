import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
export const expetime = createSlice({
    name:'edu',
    initialState,
    reducers:{
        exptime(state,action){
          return[...action.payload];

        },
      
    }
})
export const {exptime} = expetime.actions;
export default expetime.reducer;