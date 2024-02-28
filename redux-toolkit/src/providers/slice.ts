import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, incrementByAmount, decrement } = Slice.actions;

export default Slice.reducer;
