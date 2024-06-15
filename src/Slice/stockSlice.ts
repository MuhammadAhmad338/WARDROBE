import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface StockItem {
  id: number;
  productId: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  imageUrl: string;
}

interface StockItemsState {
  items: StockItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: StockItemsState = {
  items: [],
  status: 'idle',
  error: null,
};

// Async thunk for fetching stock items
export const fetchStockItems = createAsyncThunk<StockItem[]>('stockItems/fetchStockItems', async () => {
  const response = await axios.get<StockItem[]>('https://localhost:7010/api/Stock');
  return response.data;
});

export const fetchStockById = createAsyncThunk<StockItem>('stockItems/fetchStockById', async () => {
  const response = await axios.get<StockItem>('https://localhost:7010/api/Stock/');
  return response.data;
});

const stockItemsSlice = createSlice({
  name: 'stockItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStockItems.fulfilled, (state, action: PayloadAction<StockItem[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
        console.log(state.items);
      })
      .addCase(fetchStockItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch stock items';
      });
  },
});

export default stockItemsSlice.reducer;
