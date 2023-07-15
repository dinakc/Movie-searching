import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Searchpage from "./pages/searchpage.js";
import Homepage from "./pages/homepage.js";
import Movie from "./pages/movie.js";
import Search from "./search.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/movies" element={<Movie />}></Route>
        <Route path="/searchpage" element={<Searchpage />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </>
  );
}

export default App;
