// src/features/formData/formDataSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  paymentMethod: string;
}

interface FormDataState {
  formData: FormData;
  loading: boolean;
  error: string | null;
}

const initialState: FormDataState = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
    paymentMethod: '',
  },
  loading: false,
  error: null,
};

export const submitOrder = createAsyncThunk(
  'formData/submitOrder',
  async (formData: FormData, thunkAPI) => {
    try {
      console.log(`form data: ${formData}`)
      const response = await axios.post('https://wardrobewizard.onrender.com/api', formData);
       console.log('Form submission successful:', response.data);
      // Handle success (e.g., show confirmation, clear form)
      
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Partial<FormData>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetFormState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitOrder.fulfilled, (state) => {
        state.loading = false;
        state.formData = initialState.formData;
      })
      .addCase(submitOrder.rejected, (state) => {
        state.loading = false;
        state.error =  'Failed to submit order';
      });
  },
});

export const { setFormData, resetFormState } = formDataSlice.actions;
export default formDataSlice.reducer;
