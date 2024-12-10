import React from "react";
import About from "./About";

const Pics = () => {
  return (
    <>
      <div className="flex items-center justify-center object-cover gap-4 w-full
      ">
        
        <img
          src="https://i.tribune.com.pk/media/images/Babar-Azam1721817033-0/Babar-Azam1721817033-0.jpg"
          alt="baber azam"
          className="w-[47%]"
        /> 
         <img
          className="w-[47%]"
          src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2158797838.jpg?c=16x9&q=h_833,w_1480,c_fill"
          alt="Ronaldo"
        />
      </div>
      <About/>
    </>
  );
};

export default Pics;
