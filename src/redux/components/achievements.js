import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
export const achiev = createSlice({
    name:'edu',
    initialState,
    reducers:{
        achievements(state,action){
          return[...action.payload];

        },
      
    }
})
export const {achievements} = achiev.actions;
export default achiev.reducer;