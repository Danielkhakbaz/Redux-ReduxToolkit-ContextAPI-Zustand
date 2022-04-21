import { createContext, useContext } from "react";

export const CountContext = createContext();
export const CountAction = createContext();

export const useCountContext = () => useContext(CountContext);
export const useCountAction = () => useContext(CountAction);
