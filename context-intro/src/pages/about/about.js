import { Link } from "react-router-dom";
import { useCountContext } from "../../providers/count/count-context";

const About = () => {
  const { count } = useCountContext();

  return (
    <>
      <Link to="/">
        <button>Home page</button>
      </Link>
      <h1>About</h1>
      <h2>The value of count is {count}</h2>
    </>
  );
};

export default About;
