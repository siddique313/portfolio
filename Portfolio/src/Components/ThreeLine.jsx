import React, { useState } from 'react'
import ing from "../assets/logo2.png"
import Sidebar from './Sidebar'
export default function ThreeLine({hideShow, setHideShow}) {
  return (
    <div className='w-full   flex lg:hidden px-5 items-center justify-between  '>
     <div className={`${hideShow? "flex": "hidden"} flex-col  gap-1 z-10 cursor-pointer`} onClick={()=>{
      setHideShow(!hideShow)}} >
     <div className='w-6 h-1  bg-blue-950 '></div>
      <div className='w-6 h-1  bg-blue-950 '></div>
      <div className='w-6 h-1  bg-blue-950 '></div>
     </div>
     <div className=' float-right'>
        <img src={ing} width={100} className='rounded-full' alt="" />
     </div>
    </div>
  );
}
