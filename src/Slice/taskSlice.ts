// tasksSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  name: string;
  completed: boolean;
}

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    toggleTaskCompletion: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state[index].completed = !state[index].completed;
    },
  },
});

export const { addTask, toggleTaskCompletion } = tasksSlice.actions;
export default tasksSlice.reducer;
