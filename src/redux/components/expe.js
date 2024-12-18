import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
export const expe = createSlice({
    name:'edu',
    initialState,
    reducers:{
        exp(state,action){
          return[...action.payload];

        },
      
    }
})
export const {exp} = expe.actions;
export default expe.reducer;