import React, { useEffect, ChangeEvent, useState } from "react";
import axios from "axios";
import { movies } from "./datas/moviedata";
interface Content {
  name: string;
  image_url: string;
}
function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<Content[]>([]);

  const data = movies;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filter = data.filter((content) =>
      content.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilter(filter);
  };
  return (
    <>
      <div className="bg-slate-900">
        <div className=" flex justify-center align-center  h-14 ">
          <input
            value={searchTerm}
            onChange={handleInputChange}
            className="border-2 rounded bg-stone-50 .border-black w-96 border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-800"
            type="text"
            placeholder="Search for movies"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {filter.map((content: Content, index) => (
            <div
              key={index}
              className="w-60 h-72 bg-slate-100 m-2.5  flex flex-col justify-center items-center justify-around rounded backdrop-blur-xl">
              <div className="w-52 h-52 bg-emerald-950 overflow-hidden rounded">
                <img
                  className="w-full h-full object-cover"
                  src={content.image_url}
                  alt={content.name}
                />
              </div>

              <h1>{content.name}</h1>

              <div>
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
