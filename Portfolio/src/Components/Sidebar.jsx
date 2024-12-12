import React, { useState } from "react";
import logo from "../assets/logo2.png";
import { IoAppsSharp, IoMail } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import "./sideBar.css"
import { NavLink } from "react-router";
import HomePage from "./HomePage";
import Header from "./Header";
export default function Sidebar() {
  
  return (
    <div className={` flex flex-col gap-5 pt-5 pl-4 h-screen w-[240px] `}>
      <div className="flex flex-col items-start gap-6 ">
        <img className="rounded-lg h-28" src={logo}  />
        <h1 className="text-xl" >PORTFOLIO</h1>
      </div> 
      <div className="mt-8 w-full ">
        <ul className="flex flex-col gap-4  font-thin w-full">  
          <NavLink>
          <li onClick={()=>window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
})} className="hover:bg-slate-200 w-full px-2 cursor-pointer  py-2 flex items-center  gap-2 ">
          <span className="text-xl">< IoAppsSharp /></span>
          PORTFOLIO
          </li>
          </NavLink>
          <NavLink>
          <li  onClick={()=>window.scrollTo({
  top: 1000,
  left: 0,
  behavior: "smooth",
})} className="hover:bg-slate-200 w-full px-2 cursor-pointer  py-2 flex items-center gap-2 ">
          <span className="text-xl"><IoMdContact/></span>  ABOUT
          </li>
          </NavLink>
          <NavLink >
          <li onClick={()=>window.scrollTo({
  top: 2470,
  left: 0,
  behavior: "smooth",
})} className="hover:bg-slate-200 w-full px-2 cursor-pointer  py-2 flex items-center gap-2">
          <span className="text-xl"><IoMail /></span>
          CONTACT
          </li>
          </NavLink>
          
        </ul>
      </div>
    </div>
  );
}
