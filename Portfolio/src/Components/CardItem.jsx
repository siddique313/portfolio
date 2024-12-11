import React from 'react'

export default function CardItem({imge}) {
  return (
    <div className='shadow-2xl'>
          <div>
              <img className='w-full h-60 object-cover' src={imge}  />
          </div>
          <div className='p-4  flex flex-col gap-2'>
          <h1 className=''>Lorem Ipsum</h1>
          <p className='text-sm'>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          </div>
    </div>
  )
}
