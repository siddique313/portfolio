export default function TechnicalItems( {width,skillName} ) {
  return (
      <div>
                  <span>
                  {skillName}
                  </span>
                  <div className='bg-slate-400 h-10 mt-4' style={{

                      width:"100%"
                  }}>
                  <div className={`bg-slate-500 text-center  h-[100%] flex justify-center items-center`} style={{
                          width:width
                      }}>
                          <span className='text-white text-center items-center'>{width}</span>
                      </div>
                  </div>
                  
              </div>
  )
}
