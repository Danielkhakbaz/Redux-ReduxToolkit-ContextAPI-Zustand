import { Actions } from "./../../providers/count/count-action";
import { useCountAction } from "../../providers/count/count-context";

const CounterButtons = () => {
  const { dispatch } = useCountAction();

  return (
    <>
      <button onClick={() => dispatch({ type: Actions.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: Actions.DECREMENT })}>-</button>
    </>
  );
};

export default CounterButtons;
