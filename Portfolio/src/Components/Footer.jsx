const Footer = () => {
  return (
      <div className="bg-slate-500  pl-7 grid grid-cols-1 sm:grid-cols-3 text-center sm:te w-full pb-7 text-white">
        <div className="">
          <h1 className="text-2xl pt-10 ">FOOTER</h1>
          <p className="mt-12">
            Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla.
          </p>
          <p className="mt-2">Powered by w3.css</p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-5"
        ><h1 className="text-2xl pt-10 w-32">BLOG POSTS</h1>
          <div className="flex gap-6 items-center justify-center  hover:bg-slate-400" >
            <img
              className="w-14 h-16 "
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
           gap-6  hover:bg-slate-400"
          >
            <img
              className="w-14 h-16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToVXCSdIE3MtC2Zm3tz7JNWYDbhFbC25Y0gQ&s"
              alt=""
            />
            <div>
              <h1>Lorem</h1>
              <p>Sed mattis nunc</p>
            </div>
          </div>
        </div>

        <div className=" text-center flex flex-col items-center">
          <h1 className="text-2xl pt-10 ">POPULAR TAGS</h1>
          <div className="gap-2  flex flex-wrap">
            <span className="bg-black text-white px-3 mt-4">Travel</span>
            <span className="bg-slate-400 text-sm px-2 mt-4">New York</span>
            <span className="bg-slate-400 text-sm px-2 mt-4">London</span>
            <span className="bg-slate-400 text-sm px-2 mt-4">IKEA</span>
          </div>
          <div className="gap-2 text-sm flex flex-wrap">
            <span className="bg-slate-400 px-1 mt-4">DIY</span>
            <span className="bg-slate-400 px-1 mt-4">Ideas</span>
            <span className="bg-slate-400 px-1 mt-4">Baby</span>
            <span className="bg-slate-400 px-1 mt-4">Family</span>
            <span className="bg-slate-400 px-1 mt-4">Clothing</span>
          </div>
          <div className="gap-2  flex flex-wrap">
            <span className="bg-slate-400 text-sm px-2 mt-4">Shopping</span>
            <span className="bg-slate-400 text-sm px-2 mt-4">Sports</span>
            <span className="bg-slate-400 text-sm px-2 mt-4">Games</span>
          </div>
        </div>
      </div>
  );
};

export default Footer;
