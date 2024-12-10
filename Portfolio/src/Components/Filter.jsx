import React from "react";

const Filter = () => {
  return (
    <>
      <div className="flex flex-row mt-6 ml-4 gap-4">
        <h3>Filter: </h3>
        <div className="bg-white text-black flex gap-2 ">
          <button className="bg-black text-white hover:bg-slate-400 px-4">
            ALL
          </button>
          <button className=" hover:bg-slate-400 px-4">DESIGN</button>
          <button className=" hover:bg-slate-400 px-4">PHOTO</button>
          <button className=" hover:bg-slate-400 px-4">ART</button>
        </div>
      </div>
    </>
  );
};

export default Filter;
