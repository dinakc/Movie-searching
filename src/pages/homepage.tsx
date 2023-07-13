import React from "react";
import Button from "../Components/button";
import Navbar from "../Components/Navbar";

function Homepage() {
  return (
    <div className="relative">
      <img
        className="w-full"
        src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12941/production/_129279067_barbie_character_margot_instavert_1638x2048_intl.jpg.webp"
        alt="barbie image"
      />

      <div className="absolute right-96 top-20">
        <Button />
      </div>
    </div>
  );
}

export default Homepage;
