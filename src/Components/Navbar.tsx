import React from "react";
import img from "../assets/movielogo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-around align-center items-center h-20 bg-black text-white text-xl">
      <div>
        <img className="w-20 h-20" src={img} alt="movielog" />
      </div>
      <div>Food and Drinks</div>
      <div>Theaters </div>
      <div>Gift Cards </div>
      <div>Members</div>
      <div>
        <AiOutlineSearch
          onClick={() => {
            navigate("/Searchpage");
          }}
          size={24}
        ></AiOutlineSearch>
      </div>
      <div className=" ">
        <BsPersonCircle size={24}></BsPersonCircle>{" "}
      </div>
    </div>
  );
}

export default Navbar;
