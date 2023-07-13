import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
// import Searchbar from "./Components/Searchbar.jsx";
import Homepage from "./pages/homepage.js";
import Searchpage from "./pages/searchpage.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/searchpage" element={<Searchpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
