import React from 'react'
import Title from '../components/Title'
import Newsletter from '../components/Newsletter'
import contact_img from '../assets/contact_img.png'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <div className=' min-h-screen'>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
         <img className='w-full md:max-w-[420px]' src={contact_img} alt="" />
      <div className='flex flex-col items-center sm:items-start gap-6'>
        <p>Need help?</p>
      <div className=' text-2xl text-teal-500 font-bold'>
        <Title text1={'CONTACT'} text2={' US'}/>
      </div>
        <p className='font-semibold text-xl'>Our Company</p>
        <p >54510 Lahore <br/> 225 SomeWhere, Pakistan</p>
        <p>Tel: +923024387800 <br/> Email: primetechlogix@gmail.com <br /> Instagram: prime_techlogix</p>
        <p className='font-semibold text-xl'>Your Digital Transformation Partner</p>
        <p >Elevate Your Business with Our Expertise.</p>
        {/* <button className='border border-gray-500 px-8 py-4 text-sm hover:bg-black hover:text-white transition-white transition-all duration-500 '>HIRE US</button> */}
        <Link to='/hire-us'>
        <Button gradientDuoTone='greenToBlue' outline>
              HIRE US
        </Button>
        </Link>
      </div>
      </div>
  
      <div className='p-3 bg-slate-200 dark:bg-gray-800'>
      <Newsletter/>
      </div>
    </div>
    
    </>
  )
}

export default Contact
