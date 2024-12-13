import Filter from "./Filter";

const Header = () => {
  return (
      <div id="header">
        <div className="">
          <h1 className="text-4xl ml-6 pt-5">My Portfolio</h1>
        </div>
        <Filter />
      </div>
  );
};

export default Header;
