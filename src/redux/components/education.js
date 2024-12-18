import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
export const educ = createSlice({
    name:'edu',
    initialState,
    reducers:{
        education(state,action){
          return[...action.payload];

        },
      
    }
})
export const {education} = educ.actions;
export default educ.reducer;