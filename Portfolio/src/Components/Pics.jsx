import React from "react";
import About from "./About";
import img1 from "../assets/p1.png"
import img2 from "../assets/p2.png"
const Pics = () => {
  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 object-cover gap-4 px-6 w-full
      ">
        <img
          src={img1}
          alt="baber azam"
          className="w-[100%]"
        /> 
         <img
          className="w-[100%]"
          src={img2}
          alt="Ronaldo"
        />
      </div>
      <About/>
    </>
  );
};

export default Pics;
