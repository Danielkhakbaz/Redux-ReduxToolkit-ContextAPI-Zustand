import { useSelector, useDispatch } from "react-redux";
import { StateType, DispatchType } from "./providers/store";
import { increment, incrementByAmount, decrement } from "./providers/slice";

const App = () => {
  const { count } = useSelector((state: StateType) => state.counter);
  const dispatch = useDispatch<DispatchType>();

  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+ by 5</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <h1>{count}</h1>
    </>
  );
};

export default App;
