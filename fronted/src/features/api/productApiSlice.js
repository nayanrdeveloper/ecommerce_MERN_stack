// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApiSlice = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getProductById: builder.query({
      query: (productId) => `/product/${productId}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApiSlice;
