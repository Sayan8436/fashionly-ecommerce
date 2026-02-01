import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;

      const existingItem = state.items.find(
        i =>
          i.id === item.id &&
          i.color === item.color &&
          i.size === item.size
      );

      if (existingItem) {
        existingItem.qty += item.qty;
      } else {
        state.items.push(item);
      }
    },

    removeFromCart(state, action) {
      state.items = state.items.filter(
        i =>
          !(
            i.id === action.payload.id &&
            i.color === action.payload.color &&
            i.size === action.payload.size
          )
      );
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
