import { FaPaperPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  const notification = () => {
    alert("your message has been send successfully!");
  };

  return (
    <>
      <div className="bg-slate-400   ">
        <div className="ml-4 text-2xl ">
          <h1 className="pt-5 text-2xl">Contact Us</h1>
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 justify-center text-center">
          <div className="mt-6 bg-blue-700 py-12 flex flex-col gap-4 items-center justify-start ">
            <span className="text-4xl">
              <IoMdMail />
            </span>
            <h2>email@email.com</h2>
          </div>
          <div className="mt-6 bg-green-700 py-12 flex flex-col gap-4 items-center justify-start ">
            <span className="text-4xl">
              <MdLocationOn />
            </span>
            <h2>Gilgit, Pakistan</h2>
          </div>
          <div className="mt-6 bg-yellow-700 py-12 flex flex-col gap-4 items-center justify-start ">
            <span className="text-4xl">
              <FaPhone />
            </span>
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
              className="w-[98%] py-2 rounded-md text-xl px-2 border-black justify-centre outline-none"
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
          <div className=" mt-8 ml-4 pb-7">
            <button
              onClick={notification}
              className="flex  gap-2 items-center justify-center bg-black text-white hover:bg-slate-300 hover:text-black py-3 px-8 "
            >
              <FaPaperPlane /> Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
