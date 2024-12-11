import React from 'react'
import TechnicalItems from './TechnicalItems'

const Technical = () => {
  return (
      <>
          <div className='mt-10 px-4 flex flex-col gap-4'>
              <h1 className='text-xl'>Technical Skills</h1>
             <TechnicalItems width={'95%'} skillName={"Photography"}/>
             <TechnicalItems width={"85%"} skillName={"Web Design"}/>
             <TechnicalItems width={"75%"} skillName={"Photoshop"}/>
              <div className='mt-3'>
                  <button className='py-3 cursor-pointer px-4 bg-slate-500 text-white hover:bg-slate-300 hover:text-black'>Download Resume</button>
              </div>
      </div>
      </>
  )
}

export default Technical