import { useNavigate } from "react-router-dom";
import Movie from "../pages/movie";

function Button() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/movies");
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className=" bg-black text-white w-64 h-16 rounded-md text-2xl"
      >
        Watch Movies!
      </button>
    </div>
  );
}

export default Button;
