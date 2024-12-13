import React from 'react'
import ing from "../assets/logo2.png"
export default function ThreeLine() {
  return (
    <div className='w-full flex items-center '>
     <div className='flex flex-col gap-2'>
     <div className='w-full h-2  bg-blue-950 '></div>
      <div className='w-full h-2  bg-blue-950 '></div>
      <div className='w-full h-2  bg-blue-950 '></div>
     </div>
     <div className='flex float-right'>
        <img src={ing} width={200} alt="" />
     </div>
    </div>
  )
}
