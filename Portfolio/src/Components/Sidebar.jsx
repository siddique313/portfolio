import React, { useState } from "react";
import logo from "../assets/logo2.png";
import "./sideBar.css"
export default function Sidebar() {
  
  return (
    <div className={`tech flex flex-col gap-5 pt-5 pl-4 h-screen w-[240px] `}>
      <div className="flex flex-col items-start gap-6 ">
        <img className="rounded-lg h-28" src={logo}  />
        <h1 className="text-xl">PORTFOLIO</h1>
      </div>
      <div className="mt-8 w-full ">
        <ul className="flex flex-col gap-4  font-thin w-full">
          <li className="hover:bg-slate-200 w-full px-2 cursor-pointer  py-2 ">
            PORTFOLIO
          </li>
          <li className="hover:bg-slate-200 w-full px-2 cursor-pointer  py-2 ">
            ABOUT
          </li>
          <li className="hover:bg-slate-200 w-full px-2 cursor-pointer  py-2 ">
            CONTACT
          </li>
          <li className="hover:bg-slate-200 w-full px-2 cursor-pointer  py-2 ">
            HELP
          </li>
        </ul>
      </div>
    </div>
  );
}
