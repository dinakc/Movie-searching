import React from "react";
import axios from "axios";
import { useEffect } from "react";

function Card() {
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
    } catch (error) {
      console.error(error);
    }
  }
  return <div>Card</div>;
}

export default Card;
