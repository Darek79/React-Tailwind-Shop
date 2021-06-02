import { createSlice } from '@reduxjs/toolkit';

interface NavbarState{
  open:boolean
};

const initialState:NavbarState={
  open:false
};

export const navbarSlice=createSlice({
  name:'navbar',
  initialState,
  reducers:{
    openModal:state=>{
      !state.open
    }
  }
});

export const {openModal}=navbarSlice.actions;

export default navbarSlice.reducer;