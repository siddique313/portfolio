import React from "react";

const Pics = () => {
  return (
    <>
      <div className="flex object-cover gap-4">
        <img
          className="w-1/2"
          src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2158797838.jpg?c=16x9&q=h_833,w_1480,c_fill"
          alt="Ronaldo"
        />
        <img
          src="https://i.tribune.com.pk/media/images/Babar-Azam1721817033-0/Babar-Azam1721817033-0.jpg"
          alt="baber azam"
        />
      </div>
    </>
  );
};

export default Pics;
