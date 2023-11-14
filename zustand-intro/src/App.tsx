import { useStore } from "./providers/store";

const App = () => {
  const { count, increment, increment_by_amount, decrement } = useStore(
    (state) => state
  );

  return (
    <>
      <h1>The value of count is {count}</h1>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => increment_by_amount(6)}>+ by 6</button>
      <button onClick={() => decrement()}>-</button>
    </>
  );
};

export default App;
