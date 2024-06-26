// store.ts
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../Slice/taskSlice';
import dataReducer from '../Slice/postsSlice';
import cartReducer from '../Slice/cartSlice';
import stockReducer from '../Slice/stockSlice';
import formReducer from '../Slice/deliverFormSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    posts: dataReducer,
    cart: cartReducer,
    stock: stockReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
