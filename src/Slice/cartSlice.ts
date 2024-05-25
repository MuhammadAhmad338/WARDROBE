// src/cartSlice.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description: string
}

interface CartState {
  isOpen: boolean;
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  isOpen: false,
  items: [],
  totalPrice: 0,
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: state => {
      state.isOpen = !state.isOpen;
    },
    addItem: (state, action: PayloadAction<{ id: number; name: string; price: number; description: string; quantity: number, image: string }>) => {
      const newItem = action.payload;
      const existingCartItem = state.items.find(item => item.id === newItem.id);

      if (existingCartItem) {
        existingCartItem.quantity += 1;
        existingCartItem.price += newItem.price;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += newItem.price;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: state => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { toggleCart,addItem } = cartSlice.actions;

export default cartSlice.reducer;
