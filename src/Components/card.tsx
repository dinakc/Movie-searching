import React, { useState } from "react";
("use client");
import axios from "axios";
import { useEffect } from "react";

function Cards() {
  const [movies, setMovies] = useState([]);
  const options = {
    method: "GET",
    url: "https://movies-tv-shows-database.p.rapidapi.com/",
    params: {
      title: "Harry Potter",
    },
    headers: {
      Type: "get-movies-by-title",
      "X-RapidAPI-Key": "976bd2fa3amsh79ffa13735e7119p1ba648jsnd24f0b495dc2",
      "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      const result = response.data;
      setMovies(response.data.movie_results);

      console.log(result.movie_results[0].title);

      console.log(movies[4]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-60 h-72 bg-slate-300 m-2.5  flex flex-col justify-center items-center justify-around ">
      <div className="w-52 h-52 bg-emerald-950 overflow-hidden rounded ">
        <img
          className="object-cover"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <h1>hbdhs</h1>
      <div>
        <span>This is about the chocolate</span>
      </div>
    </div>
  );
}

export default Cards;
