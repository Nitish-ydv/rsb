import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
export const project = createSlice({
    name:'edu',
    initialState,
    reducers:{
        projects(state,action){
          return[...action.payload];

        },
      
    }
})
export const {projects} = project.actions;
export default project.reducer;