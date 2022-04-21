import { Link } from "react-router-dom";
import CounterButtons from "../../components/counter-buttons/counter-buttons";
import CounterDisplay from "../../components/counter-display/counter-display";

const Home = () => {
  return (
    <>
      <Link to="/about">
        <button>About page</button>
      </Link>
      <h1>Home</h1>
      <CounterDisplay />
      <CounterButtons />
    </>
  );
};

export default Home;
