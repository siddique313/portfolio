import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-slate-400   ">
        <div className="ml-4 mt-9 text-2xl ">
          <h1>Contact Me</h1>
        </div>
        <div className="mt-5 flex justify-center text-center">
          <div className="mt-6 bg-blue-700 py-12  justify-center items-center w-72">
            <h2>email@email.com</h2>
          </div>
          <div className="mt-6 bg-green-700 py-12  justify-center items-center w-72">
            <h2>Gilgit, Pakistan</h2>
          </div>
          <div className="mt-6 bg-yellow-700 py-12  justify-center items-center w-72">
            <h2>+92**********</h2>
          </div>
        </div>
        <div>
          <div className="ml-4 mt-5">
            <h3>Name</h3>
            <input
              className="w-[98%] h-10 border-black justify-centre"
              type="text"
            />
          </div>
          <div className="ml-4 mt-5">
            <h3>Email</h3>
            <input
              className="w-[98%] h-10 border-black justify-centre "
              type="text"
            />
          </div>
          <div className="ml-4 mt-5">
            <h3>Message</h3>
            <input
              className="w-[98%] h-10 border-black justify-centre "
              type="text"
            />
          </div>
          <div className=" mt-8 ml-4 ">
            <button className="bg-black text-white hover:bg-slate-400 hover:text-black py-3 px-8">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
