import {createSlice} from "@reduxjs/toolkit";

const initialState: {id: string; amount: number}[] = [];

export const Basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket(state, action) {
      if (state.length === 0) {
        state.push({id: action.payload, amount: 1});
      } else {
        state.forEach((el) => {
          if (el.id === action.payload) {
            el.amount++;
          } else {
            state.push({id: action.payload, amount: 1});
          }
        });
      }
    },
  },
});

export const {addToBasket} = Basket.actions;

export default Basket.reducer;
