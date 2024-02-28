import { useReducer } from "react";
import { CountReducer } from "./count-reducer";
import { CountContext, CountAction } from "./count-context";

const CountProvider = ({ children }) => {
  const initialState = {
    count: 5,
  };
  
  const [state, dispatch] = useReducer(CountReducer, initialState);

  return (
    <CountContext.Provider value={{ ...state }}>
      <CountAction.Provider value={{ dispatch }}>
        {children}
      </CountAction.Provider>
    </CountContext.Provider>
  );
};

export default CountProvider;
