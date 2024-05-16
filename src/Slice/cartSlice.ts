// src/cartSlice.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartState {
  isOpen: boolean;
  items: CartItem[];
}

const initialState: CartState = {
  isOpen: false,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: state => {
      state.isOpen = !state.isOpen;
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const { toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
