import React from 'react'
import Newsletter from '../components/Newsletter'
import Title from '../components/Title'
import about_img from '../assets/about_img.png'


const About = () => {
  return (
    <>
    <div className='min-h-screen'>
      <div className=''>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
       <img className='sm:mx-4 w-full md:max-w-[450px] shadow-2xl  hover:scale-105 transition-all duration-700  cursor-pointer' src={about_img} alt="" style={{ boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)' }} />
       <div className='flex flex-col justify-center gap-6 md:w-2/4 p-2'>
       <p className='text-1xl'>Know About Us</p>
        <div className='text-2xl text-teal-500 font-bold '>
            <Title text1={"ABOUT"} text2={' PRIME TECHLOGIX'}/>
          </div>
        <p>Prime Techlogix is leading and evolving the traditional way organizations used to deal with their consumers.</p>
        <p>Founded in 2024, Prime Techlogix is a tech startup dedicated to empowering businesses with innovative solutions. Our team of passionate developers and designers is committed to delivering cutting-edge products and services that drive growth and success. </p>
        <b className=''>Our Mission</b>
        <p>Leveraging our technical expertise, we collaborate with clients to create innovative solutions. Our goal is to exceed expectations and foster long-lasting partnerships.</p>
        <p className='hover:scale-105 transition-all duration-700 cursor-pointer'><span 
        className='text-2xl text-teal-500 hover:scale-110 transition-transform duration-300 ' 
        style={{ fontFamily: 'Pacifico', 
        fontStyle: 'italic',
        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.2)'}}>
        Talha Azfar 
        </span>
        <br />
        <span>
        Founder of Prime Techlogix
        </span></p>
      
       </div>
      </div>
      <div className='text-xl py-4 p-2'>
         <Title text1={'WHY'} text2={' CHOOSE US ?'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
         <b>Innovation at the Core:</b>
         <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque delectus odio tempora id quasi ad eligendi fugit facere, voluptate pariatur neque quis cupiditate amet ex accusamus facilis esse asperiores! Maxime.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
         <b>Client-Centric Approach:</b>
         <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque delectus odio tempora id quasi ad eligendi fugit facere, voluptate pariatur neque quis cupiditate amet ex accusamus facilis esse asperiores! Maxime.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
         <b>Proven Track Record:</b>
         <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque delectus odio tempora id quasi ad eligendi fugit facere, voluptate pariatur neque quis cupiditate amet ex accusamus facilis esse asperiores! Maxime.</p>
       </div>
      </div>
      </div>
      <div className='p-3 bg-slate-200 dark:bg-gray-800'>
      <Newsletter/>
      </div>
    </div>
   
    </>
  )
}

export default About
