import React from "react";
import Filter from "./Filter";

const Header = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="text-4xl mt-10 ml-4">My Portfolio</h1>
        </div>
        <Filter />
      </div>
    </>
  );
};

export default Header;
