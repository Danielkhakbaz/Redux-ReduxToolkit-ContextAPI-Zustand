import { useSelector } from "react-redux";

const Display = () => {
  const { count } = useSelector((state) => state.CountReducer);

  return <h4>The value of count is {count}</h4>;
};

export default Display;
