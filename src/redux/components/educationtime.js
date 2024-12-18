import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
export const eductime = createSlice({
    name:'edu',
    initialState,
    reducers:{
        educationtimes(state,action){
          return[...action.payload];

        },
      
    }
})
export const {educationtimes} = eductime.actions;
export default eductime.reducer;