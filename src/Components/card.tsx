import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

interface Ii {
  height: number;
  imageUrl: string;
  width: number;
}
interface IMovie {
  i?: Ii;

  l: string;
  s: string;
}

function Cards() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/auto-complete",
    params: { q: "game" },
    headers: {
      "X-RapidAPI-Key": "26461c6871mshf4d96ef75e1c4e2p18049ajsn9b2c6c04248f",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.request(options);
      console.log(response.data.d);
      const result = response.data.d;
      setMovies(result);
    } catch (error) {
      console.error(error);
    }

    useEffect(() => {
      console.log(movies);
    }, [movies]);
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="w-60 h-72 bg-slate-100 m-2.5  flex flex-col justify-center items-center justify-around rounded backdrop-blur-xl">
            <div className="w-52 h-52 bg-emerald-950 overflow-hidden rounded">
              {movie.i && (
                <img
                  className="object-cover"
                  src={movie.i.imageUrl}
                  alt={movie.l}
                />
              )}
            </div>

            <h1>{movie.l}</h1>

            <div>
              <span>Leads: {movie.s}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
