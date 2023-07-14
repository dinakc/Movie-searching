import Cards from "../Components/card";
import Searchbar from "../Components/Searchbar";

function Movie() {
  return (
    <>
      <div className="bg-slate-900">
        <Searchbar />
        <Cards />
      </div>
    </>
  );
}

export default Movie;
