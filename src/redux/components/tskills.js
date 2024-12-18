import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
export const tskill = createSlice({
    name:'edu',
    initialState,
    reducers:{
        tskills(state,action){
          return[...action.payload];

        },
      
    }
})
export const {tskills} = tskill.actions;
export default tskill.reducer;