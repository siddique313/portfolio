import { useState } from "react";
import img from "../assets/logo.png"
export const Prc = () => {
 const [open, setOpen] = useState(true);
 const Menus = [
 { title: "Overview", src: img},
 { title: "Transactions", src: img },
 { title: "Loyalty Cards", src:img, gap: true },
 { title: "Subscriptions ", src: img },
 { title: "Debts", src: "Debt" },
 { title: "Legal information", src:img },
 { title: "Notifications ", src: img, gap: true },
 { title: "Setting", src: img },
 ];
 return (<>
 <div className="flex max-w-screen-md">
 <div
 className={` ${
 open ? "w-72" : "w-20 "
 } bg-black h-screen p-5 pt-8 relative duration-300 w-full`}
 >
             <img
                 
                 src={img} width={100}
    
 className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
 border-2 rounded-full ${!open && "rotate-180"}`}
 onClick={() => setOpen(!open)}
 />
 <div className="flex gap-x-4 items-center">
 <img
                     src={img} width={100} className={`cursor-pointer duration-500 ${
 open && "rotate-[360deg]"
 }`}
 />
 <h1
 className={`text-white origin-left font-medium text-xl duration-200 ${
 !open && "scale-0"
 }`}
 >
 AdeCodes
 </h1>
 </div>
 </div>
 </div >
 </>
 )
 }
