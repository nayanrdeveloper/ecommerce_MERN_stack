import { configureStore } from "@reduxjs/toolkit";
import { productApiSlice } from "./features/api/productApiSlice";

export default configureStore({
  reducer: {
    [productApiSlice.reducerPath]: productApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApiSlice.middleware),
});
