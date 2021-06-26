import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BasketReducerI} from "./../../Interfaces/Interfaces";
const initialState: BasketReducerI = [];

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
    deleteItemsFromBasket(
      state,
      action: PayloadAction<string>
    ) {
      return state.filter((el) => {
        return el.id !== action.payload;
      });
    },
  },
});

export const {addToBasket, deleteItemsFromBasket} =
  Basket.actions;

export default Basket.reducer;
