import { createContext, useContext, useState, ReactNode } from "react";

const initialMovie = {
  title: "Wonka",
  year: 0,
  imdb_id: "ashma",
};
// const initialMovie = createContext("default");

export const MovieContext = createContext(initialMovie);
type MovieContextProviderProps = {
  children: ReactNode;
};

export const MovieContextProvider = ({
  children,
}: MovieContextProviderProps) => {
  const [movies, setMovies] = useState<any>(null);
  return (
    <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
  );
};
