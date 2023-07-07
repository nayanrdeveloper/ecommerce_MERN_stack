import { configureStore } from "@reduxjs/toolkit";
import { productApiSlice } from "./features/api/productApiSlice";
import cartReducer from "./features/api/cartSlice";
import cartSummeryReducer from "./features/api/cartSummerySlice";

export default configureStore({
  reducer: {
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    cart: cartReducer,
    cartSummery: cartSummeryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApiSlice.middleware),
});
