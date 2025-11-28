import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Plant {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface CartItem extends Plant {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Plant>) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    increment: (state, action: PayloadAction<number>) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(i => i.id === action.payload);
      if (index !== -1) {
        state.totalQuantity -= state.items[index].quantity;
        state.totalPrice -= state.items[index].quantity * state.items[index].price;
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addToCart, increment, decrement, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
