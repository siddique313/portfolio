import React from "react";

const Filter = () => {
  return (
 
      <div className="flex flex-row mt-6 ml-6 gap-4 items-center">
        <h3>Filter: </h3>
        <div className="  text-black flex gap-4 bg-slate-100">
          <button className="bg-black text-white hover:bg-slate-200 hover:text-black px-4 py-2">
            ALL
          </button>
          <button className=" bg-white hover:bg-slate-200 px-4 py-2">DESIGN</button>
          <button className="bg-white hover:bg-slate-200 px-4 py-2">PHOTO</button>
          <button className="bg-white hover:bg-slate-200 px-4 py-2">ART</button>
        </div>
      </div>
   
  );
};

export default Filter;
