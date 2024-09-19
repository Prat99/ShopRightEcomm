import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProductItem } from "../types";

export interface CartState {
  cartItem: Array<IProductItem>;
}

const initialState: CartState = {
  cartItem: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      state.cartItem.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      const index = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItem.splice(index, 1);
    },
    editCart: (state, action) => {
      const index = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItem[index] = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart, editCart } = CartSlice.actions;

export default CartSlice.reducer;
