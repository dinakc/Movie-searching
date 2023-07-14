import React from "react";

function Searchbar() {
  return (
    <div className=" flex justify-center align-center  h-14 ">
      <input
        className="border-2 rounded bg-stone-50 .border-black w-96 border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-800"
        type="text"
        placeholder="Search for movies"
      />
    </div>
  );
}

export default Searchbar;
