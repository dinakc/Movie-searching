import React from "react";
import { useContext } from "react";
import { MovieContext } from "../context/movie-context";

function Movie() {
  const value = useContext(MovieContext);
  console.log(value);
  return <div></div>;
}

export default Movie;
