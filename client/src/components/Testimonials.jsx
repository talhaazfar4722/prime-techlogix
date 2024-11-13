import React from 'react'
import profile_img_1 from '../assets/profile_img_1.png'
import profile_img_2 from '../assets/profile_img_2.png'
import Title from './Title'

const Testimonials = () => {
  return (
    <div>
      
      {/* Title */}
      <div>
      <div className="text-2xl text-center pt-8 font-bold text-teal-500 ">
          <Title text1={"CUSTOMER "} text2={' TESTIMONIALS'} />
          </div>
          <p className='text-center'>Trustworthy and reliable service, backed by real customer feedback</p>
        </div>
      
     <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8'>
            <div className='bg-white dark:bg-gray-900 rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700 border border-teal-500 cursor-pointer'>
                <p className='text-4xl '>"</p>
                <p className='text-sm '>I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                <div className='flex items-center gap-3 mt-5'>
                    <img className='w-9 rounded-full' src={profile_img_1} alt="" />
                    <div>
                        <p>Richard Nelson</p>
                        <p className='text-sm'>Client</p>
                    </div>
                </div>
            </div>
            <div className='bg-white dark:bg-gray-900 rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700 border border-teal-500 cursor-pointer'>
                <p className='text-4xl '>"</p>
                <p className='text-sm '>I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                <div className='flex items-center gap-3 mt-5'>
                    <img className='w-9 rounded-full' src={profile_img_2} alt="" />
                    <div>
                        <p>Richard Nelson</p>
                        <p className='text-sm'>Client</p>
                    </div>
                </div>
            </div>
    
     </div>

    </div>
  )
}

export default Testimonials
