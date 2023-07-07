import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const { product, qty } = action.payload;
      const existingItem = state.items.find(
        (item) => item.product._id === product._id
      );

      if (existingItem) {
        existingItem.qty += qty;
      } else {
        state.items.push({ product, qty });
      }
      state.totalQuantity += qty;
      state.totalPrice += product.price * qty;
    },
    removeItemFromCart(state, action) {
      const productId = action.payload;
      const removedItem = state.items.find(
        (item) => item.product._id === productId
      );

      if (removedItem) {
        state.totalQuantity -= removedItem.qty;
        state.totalPrice -= removedItem.product.price * removedItem.qty;
        state.items = state.items.filter(
          (item) => item.product._id !== productId
        );
      }
    },
    updateQuantity(state, action) {
      const { productId, qty } = action.payload;
      const item = state.items.find((item) => item.product._id === productId);

      if (item) {
        state.totalQuantity += qty - item.qty;
        state.totalPrice += (qty - item.qty) * item.product.price;
        item.qty = qty;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
