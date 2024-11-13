import React from 'react'


const Clients = () => {
  return (
    <div className='  flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base '>
      
<div className='hover:scale-110  transition-all duration-300'>
<div className="w-32 h-32 rounded-full flex items-center justify-center m-auto mb-5 cursor-pointer  "
style=
{{  borderLeft: '5px solid rgba(0, 128, 128, 0.5)',
    borderTop: '5px solid rgba(0, 128, 128, 0.5)',
    borderRight: '5px solid teal',
    borderBottom: '5px solid teal',
}}>
  <span className=" font-bold text-2xl  ">100 <span className='text-3xl'>+</span></span>
</div>
    <p className='font-bold text-2xl cursor-pointer'>Clients Served</p>
</div>

<div>
<div className='hover:scale-110  transition-all duration-300'>
<div className="w-32 h-32 rounded-full flex items-center justify-center m-auto mb-5 cursor-pointer"
style=
{{  borderLeft: '5px solid rgba(0, 128, 128, 0.5)',
    borderTop: '5px solid rgba(0, 128, 128, 0.5)',
    borderRight: '5px solid teal',
    borderBottom: '5px solid teal',
}}>
  <span className=" font-bold text-2xl">100 <span className='text-3xl'>+</span></span>
</div>
    <p className='font-bold text-2xl cursor-pointer '>Happy Clients</p>
</div>
</div>

<div className='hover:scale-110  transition-all duration-300'>
<div className="w-32 h-32 rounded-full flex items-center justify-center m-auto mb-5 cursor-pointer"
style=
{{  borderLeft: '5px solid rgba(0, 128, 128, 0.5)',
    borderTop: '5px solid rgba(0, 128, 128, 0.5)',
    borderRight: '5px solid teal',
    borderBottom: '5px solid teal',
}}>
  <span className=" font-bold text-2xl">150 <span className='text-3xl'>+</span></span>
</div>
    <p className='font-bold text-2xl cursor-pointer'>Projects Done</p>
</div>

    </div>
  )
}

export default Clients
