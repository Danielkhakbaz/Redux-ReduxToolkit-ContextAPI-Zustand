import { configureStore } from "@reduxjs/toolkit";
import Slice from "./slice";

export const Store = configureStore({
  reducer: {
    counter: Slice,
  },
});

export type StateType = ReturnType<typeof Store.getState>;
export type DispatchType = typeof Store.dispatch;
