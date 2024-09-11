import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalPrice: 0 },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== productId);
      } else {
        existingItem.quantity -= 1;
      }
      state.totalPrice -= existingItem.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
