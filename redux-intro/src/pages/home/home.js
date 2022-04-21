import { Link } from "react-router-dom";
import Display from "../../components/counter/display/display";
import Buttons from "../../components/counter/buttons/buttons";

const Home = () => {
  return (
    <>
      <Link to="/about">
        <button>About</button>
      </Link>
      <h1>Home Page</h1>
      <Display />
      <Buttons />
    </>
  );
};

export default Home;
