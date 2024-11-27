import { configureStore } from "@reduxjs/toolkit";
import purchasesReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    purchases: purchasesReducer, // Register the purchases reducer
  },
});

export default store;
