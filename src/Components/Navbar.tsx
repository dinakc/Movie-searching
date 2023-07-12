import React from "react";
import img from "../assets/movielogo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className="flex justify-around align-center items-center h-20 bg-black text-white">
      <div>
        <img className="" src="{img}" alt="movielog" />
      </div>
      <div className="">Food and Drinks</div>
      <div className="">Theaters </div>
      <div className="">Gift Cards </div>
      <div>Members</div>
      <div className="">
        <AiOutlineSearch size={20}></AiOutlineSearch>
      </div>
      <div className=" ">
        <BsPersonCircle size={20}></BsPersonCircle>{" "}
      </div>
    </div>
  );
}

export default Navbar;
