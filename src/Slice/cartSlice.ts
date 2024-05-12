// src/cartSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  isOpen: boolean;
}

const initialState: CartState = {
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
