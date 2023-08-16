import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // value: 0,
  products: [], // Inicializamos el estado con un array vacío
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload); // Agregamos un producto al array
    },

    // addProducts: (state, action) => {
    //   state.name = action.payload.name
    //   state.tax = action.payload.tax
    //   state.image = action.payload.image
    // }

    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
