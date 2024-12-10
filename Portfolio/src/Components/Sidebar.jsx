import React from 'react'
import logo from "../assets/logo2.png"
export default function Sidebar() {
  return (
    <div className='flex flex-col gap-5 pt-5 pl-4  w-64 h-screen '>
          <div className='flex flex-col items-start gap-6'>
              <img className='rounded-lg h-28 ' src={logo} alt="" />

              <h1 className='text-xl'>PORTFOLIO</h1>
          </div>
          <div className='mt-8'>

              <ul className='flex flex-col gap-4 font-thin'>
                  <li>PORTFOLIO</li>
                  <li>ABOUT</li>
                  <li>CONTACT</li>
                  <li>HELP</li>
                  
              </ul>
             
          </div>
    </div>
  )
}
