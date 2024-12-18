import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
export const skill = createSlice({
    name:'edu',
    initialState,
    reducers:{
        skills(state,action){
          return[...action.payload];

        },
      
    }
})
export const {skills} = skill.actions;
export default skill.reducer;