import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


interface FormData {
    name: string;
    email: string;
    message: string;
  }
  
  export const contactData = createAsyncThunk(
    'formData/contactForm',
    async (formData: FormData, thunkAPI) => {
      try {
        console.log('Form data:', formData);
        const response = await axios.post('https://wardrobewizard.onrender.com/api/contact', formData);
        console.log('Form submission successful:', response.data);
        return response.data; // Assuming response.data contains any relevant server response
      } catch (error: any) {
        console.error('Form submission error:', error.message);
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    }
  );