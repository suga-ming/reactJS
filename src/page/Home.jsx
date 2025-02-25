import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goAbout = () => {
    navigate("/about");
  };
  return (
    <div>
      <div>HomePage</div>
      <Link to="/about">Go about</Link>
      <button onClick={goAbout}>About</button>
    </div>
  );
};

export default Home;
