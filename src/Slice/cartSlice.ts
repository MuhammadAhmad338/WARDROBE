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
    addToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingCartItem = state.items.find(item => item.id === newItem.id);

      if (existingCartItem) {
        // If the item exists, increase its quantity
        existingCartItem.quantity += 1;
      } else {
        // If the item does not exist, add it to the cart with quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      }

      // Update the total quantity and total price of the cart
      state.totalQuantity += 1;
      state.totalPrice += newItem.price;
    },

    // Add
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

export const { toggleCart,addToCart } = cartSlice.actions;

export default cartSlice.reducer;
