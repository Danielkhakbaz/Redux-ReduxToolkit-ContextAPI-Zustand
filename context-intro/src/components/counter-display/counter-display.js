import { useCountContext } from "../../providers/count/count-context";

const CounterDisplay = () => {
  const { count } = useCountContext();

  return <h2>The value of count is {count}</h2>;
};

export default CounterDisplay;
