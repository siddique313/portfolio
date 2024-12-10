import React from 'react'

const Technical = () => {
  return (
      <>
          <div className='mt-10 px-4 flex flex-col gap-4'>
              <h1 className='text-xl'>Technical Skills</h1>
              <div>
                  <span>
                  Photography
                  </span>
                  <div className='bg-slate-400 h-10 mt-4'>
                      <div className='bg-slate-500 w-[95%] text-center h-[100%] flex justify-center items-center'>
                          <span className='text-white text-center items-center'>95%</span>
                      </div>
                  </div>
                  
              </div>

              <div >
                  <span>
                  Web Design
                  </span>
                  <div className='bg-slate-400 h-10 mt-4'>
                      <div className='bg-slate-500 w-[85%] text-center h-[100%] flex justify-center items-center'>
                          <span className='text-white text-center items-center'>85%</span>
                      </div>
                  </div>
                  
              </div>

              <div>
                  <span>
                  Photoshop
                  </span>
                  <div className='bg-slate-400 h-10 mt-4'>
                      <div className='bg-slate-500 w-[80%] text-center h-[100%] flex justify-center items-center'>
                          <span className='text-white text-center items-center'>80%</span>
                      </div>
                  </div>
                  
              </div>
              
              <div className='mt-3'>
                  <button className='py-3 cursor-pointer px-4 bg-slate-500 text-white hover:bg-slate-300 hover:text-black'>Download Resume</button>
              </div>
      </div>
      </>
  )
}

export default Technical
