// lib/features/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state of the counter
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// Create the slice
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Action to increment the counter
    increment: (state) => {
      state.value += 1;
    },
    // Action to decrement the counter
    decrement: (state) => {
      state.value -= 1;
    },
    // Action to increment by a specific amount
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export the actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
