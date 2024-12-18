import { createSlice } from "@reduxjs/toolkit";

const initialState={}
export const rest = createSlice({
    name:'edu',
    initialState,
    reducers:{
        rests(state,action){
          return action.payload;

        },
      
    }
})
export const {rests} = rest.actions;
export default rest.reducer;