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
              className="w-[98%] rounded-md py-2 text-xl px-2 border-black justify-centre outline-none"
              type="text"
            />
          </div>
          <div className="ml-4 mt-5">
            <h3>Email</h3>
            <input
              className="w-[98%] py-2 rounded-md text-xl px-2 border-black justify-centre outline-none
              "
              type="email"
            />
          </div>
          <div className="ml-4 mt-5">
            <h3>Message</h3>
            <input
              className="w-[98%] py-2 text-xl rounded-md px-2 border-black justify-centre outline-none "
              type="textarea"
            />
          </div>
          <div className=" mt-8 ml-4 mb-3">
            <button className="bg-black text-white hover:bg-slate-300 hover:text-black py-3 px-8 mb-3">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
