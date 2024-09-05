import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProductItem } from "../types";

export interface ProductsState {
  products: Array<IProductItem>;
  loading: boolean;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.loading = true;
    },
    getProductsListSuccess: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    getProductsListFailure: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProducts, getProductsListSuccess, getProductsListFailure } =
  ProductsSlice.actions;

export default ProductsSlice.reducer;
