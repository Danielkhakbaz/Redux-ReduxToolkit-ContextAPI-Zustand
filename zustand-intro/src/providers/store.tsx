import { create } from "zustand";

type StoreType = {
    count: number;
    increment: () => void;
    incrementByAmount: (value: number) => void;
    decrement: () => void;
}

export const useStore = create<StoreType>((set) => ({
    count: 0,
    increment: () => set(state => ({ count: state.count + 1 })),
    incrementByAmount: (value) => set(state => ({...state, count: state.count + value})),
    decrement: () => set(state => ({ count: state.count - 1 }))
}))
