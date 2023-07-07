import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalQuantity: 0,
  totalPrice: 0,
};

const crateSlice = createSlice({
  name: 'cartSummery',
  initialState,
  reducers: {
    calculateTotals(state, action) {
      const { items } = action.payload;
      
      const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
      const totalPrice = items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
      
      state.totalQuantity = totalQuantity;
      state.totalPrice = totalPrice;
    },
  },
});

export const { calculateTotals } = crateSlice.actions;

export default crateSlice.reducer;