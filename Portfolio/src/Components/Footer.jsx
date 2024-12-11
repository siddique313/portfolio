import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-500  pl-7 flex justify-between w-full">
        <div className="w-[30%]">
          <h1 className="text-2xl pt-10 ">FOOTER</h1>
          <p className=" mt-3">
            Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla.
          </p>
          <p className="mt-2">Powered by w3.css</p>
        </div>
        <div
          className="w-[30%] flex flex-col
        gap-5"
        >
          <h1 className="text-2xl pt-10 w-32">BLOG POSTS</h1>
          <div
            className="flex
           gap-6"
          >
            <img
              className="w-14"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/220px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
              alt=""
            />
            <div>
              <h1>Lorem</h1>
              <p>Sed mattis nunc</p>
            </div>
          </div>
          <div className="h-0.5 w-[full] bg-white"></div>
          <div
            className="flex
           gap-6"
          >
            <img
              className="w-14"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToVXCSdIE3MtC2Zm3tz7JNWYDbhFbC25Y0gQ&s"
              alt=""
            />
            <div>
              <h1>Lorem</h1>
              <p>Sed mattis nunc</p>
            </div>
          </div>
        </div>
        
        <div className="w-[30%]">
          <h1 className="text-2xl pt-10 ">POPULAR TAGS</h1>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
