import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const About = () => {
  const { count } = useSelector((state) => state.count);

  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <h1>About</h1>
      <h3>The value of count is {count}</h3>
    </>
  );
};

export default About;
