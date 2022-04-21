import { useDispatch } from "react-redux";
import { Actions } from "./../../../providers/count/count-actions";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch({ type: Actions.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: Actions.DECREMENT })}>-</button>
    </>
  );
};

export default Buttons;
