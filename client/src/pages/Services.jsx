import React from 'react'
import { MdConstruction, MdFavoriteBorder } from "react-icons/md";
import Title from '../components/Title';
import Clients from '../components/Clients';
import about_img from '../assets/about_img.png'
import web_dev from '../assets/web_dev.jpeg'
import app_dev from '../assets/app_dev.webp'
import ui_ux from '../assets/ui_ux.jpg'
import {FaArrowAltCircleRight, FaCss3, FaEdit, FaFigma, FaHtml5, FaPhotoVideo, FaReact, FaStumbleuponCircle, FaUikit, FaVectorSquare, FaWordpress, } from 'react-icons/fa'
import {SiFlutter, SiJavascript, SiKotlin, SiNodedotjs, SiSwift} from 'react-icons/si'
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';

export default function Services() {
  return (
    <div>
    <div className="min-h-screen   ">
      <div className='flex flex-col items-center'>
  <div className="p-8 md:w-2/3 text-center ">
    <p className="text-center">Design. Development. Consultancy.</p>
    <div className="text-2xl font-bold text-teal-500 text-center">
      <Title text1={"WE GOT"} text2={' YOU COVERED'}/>
    </div>
    <p className="leading-relaxed tracking-wide text-center">We bring you award-winning products, advanced UI / UX, and world-class web talent and mobile
    platforms that bridge the gap between the creative world and technology. At Prime Techlogix, our
    solutions become the kind of technology that others are promoting.</p>
  </div>
  </div>
     <div className='p-3 bg-slate-200 dark:bg-gray-800'>
        <Clients/>
        </div>

      <div className='pt-8 p-4'>
        <div className='flex flex-col sm:flex-row '>
        <img  className='w-full sm:w-1/2 sm:hidden' src={web_dev}  alt="" />
        {/* Hero Left Sdide */}
        <div className="w-full sm:w-1/2 flex p-5">
        <div className=''>
            <div className='flex gap-2'>
                <p className='font-bold text-[30px]'>01</p>
            </div>
            <h1 className='text-3xl sm:py-3 font-bold leading-relaxed text-teal-500'>Web Design & Development</h1>
            <div className="flex">
                <p className='text-lg leading-relaxed tracking-wide'>Developing and understanding the solution requirements is the key to any project. First, our team meets with you to understand your detailed business needs so we can design a solution that meets your specific needs. After that, we assigned a team of architects, web developers, and web designers who are best qualified to accomplish the task.</p>
            </div>
            <p className='text-xl font-semibold text-teal-500'>Core Niches:</p>
       
            <li>Front-End Development</li>
            <li>Back-End Development</li>
            <li>Ecommerce Development</li>
            <li>Full Stack Development</li>
         
          <ul className='flex-row flex lg:flex lg:flex-cols pt-5 text-5xl lg:gap-12'>
            <li><FaReact color='darkblue'/></li>
            <li><SiJavascript color='yellow'/></li>
            <li><FaHtml5 color='orange'/></li>
            <li><FaWordpress color='#00749C'/></li>
            <li><SiNodedotjs color='darkgreen'/></li>
            <li><FaCss3 color='darkblue'/></li>
          </ul>
          <div className='pt-5'>
          <Link
          to='/hire-us'
          className='text-xs sm:text-sm'
        >
          <Button
            gradientDuoTone="greenToBlue"
            type="naviate"
            className='hover:scale-105 transition-transform duration-300'
          >
          Discuss your project
          <FaArrowAltCircleRight className='mx-2' fontSize={20}/>
          </Button>
          </Link>
          </div>
        </div>
        </div>
      {/* Hero Right Side */}
      <img  className='w-full sm:w-1/2 hidden sm:block' src={web_dev}  alt="" />
      </div>


{/* 2 */}
      <div className='flex flex-col sm:flex-row '>
        <img  className='w-full sm:w-1/2 ' src={app_dev}  alt="" />
        {/* Hero Left Sdide */}
        <div className="w-full sm:w-1/2 flex p-5">
        <div className=''>
            <div className='flex gap-2'>
                <p className='font-bold text-[30px]'>02</p>
            </div>
            <h1 className='text-3xl sm:py-3 font-bold leading-relaxed text-teal-500'>Mobile App Development</h1>
            <div className="flex">
                <p className='text-lg leading-relaxed tracking-wide'>Designing a mobile app is not easy, but using it should be. Customers expect the best mobile experience and we bring their needs into the palm of their hand. At every step of the process, our engineers want to apply the best user experience (UX) of your application. Additionally, we stay on top of mobile trends, use advanced mobile and UX systems, and work to provide you with a flexible mobile app that exceeds your users’ expectations. </p>
            </div>
            <p className='text-xl font-semibold text-teal-500'>Core Niches:</p>
            
            <li>Mobile App Design</li>
            <li>Mobile App Development</li>
            <li>IOS And Android Apps</li>
            <li>UX/UI Design</li>
          
          <ul className='flex flex-row lg:flex lg:flex-cols pt-5 text-5xl lg:gap-12'>
            <li><FaReact color='darkblue'/></li>
            <li><SiJavascript color='yellow'/></li>
            <li><SiFlutter color='blue'/></li>
            <li><SiNodedotjs color='darkgreen'/></li>
            <li><SiSwift color='orange'/></li>
            <li><SiKotlin className='text-blue-400'/></li>
          </ul>
          <div className='pt-5'>
          <Link
          to='/hire-us'
          className='text-xs sm:text-sm'
        >
          <Button
            gradientDuoTone="greenToBlue"
            type="naviate"
            className='hover:scale-105 transition-transform duration-300'
          >
          Discuss your project
          <FaArrowAltCircleRight className='mx-2' fontSize={20}/>
          </Button>
          </Link>
          </div>
        </div>
        </div>
      </div>

      {/* 3 */}
      <div className='flex flex-col sm:flex-row '>
        <img  className='w-full sm:w-1/2 sm:hidden' src={ui_ux}  alt="" />
        {/* Hero Left Sdide */}
        <div className="w-full sm:w-1/2 flex p-5">
        <div className=''>
            <div className='flex gap-2'>
                <p className='font-bold text-[30px]'>03</p>
            </div>
            <h1 className='text-3xl sm:py-3 font-bold leading-relaxed text-teal-500'>UI/UX Design</h1>
            <div className="flex">
                <p className='text-lg leading-relaxed tracking-wide'>Promote your business by integrating web-specific and responsive UI / UX designs, adapted to a variety of device with user experience design services. Without the technical complexity of your web application technology, we will make its UX design simpler and easier. Our UI / UX designers follow modern UI / UX design principles to design flexible, easy-to-use, and uncontrollable web applications.</p>
            </div>
            <p className='text-xl font-semibold text-teal-500'>Core Niches:</p>
        
            <li>Web UI/UX Design</li>
            <li>Mobile App UI/UX Design</li>
            <li>Banner Design</li>
            <li>Logo Design</li>
            <li>UI/UX Brand Identity</li>
          
          <ul className=' flex flex-row lg:flex lg:flex-cols pt-5 text-5xl lg:gap-12'>
            <li><FaFigma color='darkblue'/></li>
            <li><FaUikit color='orange'/></li>
          </ul>
          <div className='pt-5'>
          <Link
          to='/hire-us'
          className='text-xs sm:text-sm'
        >
          <Button
            gradientDuoTone="greenToBlue"
            type="naviate"
            className='hover:scale-105 transition-transform duration-300'
          >
          Discuss your project
          <FaArrowAltCircleRight className='mx-2' fontSize={20}/>
          </Button>
          </Link>
          </div>
        </div>
        </div>
      {/* Hero Right Side */}
      <img  className='w-full sm:w-1/2 hidden sm:block' src={ui_ux}  alt="" />
      </div>


     </div>
</div>
<div className='p-3'>
        <Testimonials/>
      </div>
<div className='p-3 bg-slate-200 dark:bg-gray-800'>
      <Newsletter/>
      </div>
</div>
  )
}
