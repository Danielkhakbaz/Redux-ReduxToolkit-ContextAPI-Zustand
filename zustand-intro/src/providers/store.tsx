import { create } from "zustand";

type StoreType = {
  count: number;
  increment: () => void;
  increment_by_amount: (value: number) => void;
  decrement: () => void;
};

export const useStore = create<StoreType>((set) => ({
  count: 0,
  increment() {
    set((state) => ({
      ...state,
      count: state.count + 1,
    }));
  },
  increment_by_amount(value) {
    set((state) => ({
      ...state,
      count: state.count + value,
    }));
  },
  decrement() {
    set((state) => ({
      ...state,
      count: state.count - 1,
    }));
  },
}));
