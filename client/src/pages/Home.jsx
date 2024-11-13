import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import Title from '../components/Title';
import Newsletter from '../components/Newsletter';
import { Button } from 'flowbite-react';
import about_img from '../assets/about_img.png'
import our_services from '../assets/our_services.webp'
import ProjectCard from '../components/ProjectCard';
import Clients from '../components/Clients';

import { MdConstruction } from 'react-icons/md';
import Testimonials from '../components/Testimonials';
import { useDispatch, useSelector } from 'react-redux';
import { FaHtml5 } from 'react-icons/fa';

export default function Home() {

  const [posts, setPosts] = useState([]);
  const [project, setProject] = useState([]);
  const dispatch = useDispatch();
    const {currentUser} = useSelector(state=>state.user);

  // getting posts
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/post/getposts?limit=6`);
      // const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

   // getting projects
   useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(`/api/project/getproject?limit=3`);
      
      const data = await res.json();
      setProject(data.project);
    };
    fetchProject();
  }, []);

  return (
  
    <div className='min-h-screen'>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome To <span className='text-teal-500 dark:text-teal-500 '> Prime Techlogix </span></h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
        Your One-Stop Solution for Web Development, Mobile App Development, Responsive Web and App Designs, UI/Ux Design, and Cloud Solutions.
        </p>
        
        <Link
          to='/hire-us'
          className='text-xs sm:text-sm'
        >
          <Button gradientDuoTone='greenToBlue' outline >
        Hire Us 
       </Button>
        </Link>
        
      </div>
     
     
      <div className='p-3 bg-slate-200 dark:bg-gray-800'>
      <Newsletter/>
      </div>

{/* about us */}
      <div className='max-w-6xl mx-auto sm:p-3 flex flex-col gap-8 py-7'>
        
          <div className='flex flex-col gap-6'>
            
          <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className="shadow-2xl w-full md:max-w-[450px]  rounded-tl-[30px] rounded-br-[30px] hover:scale-105 transition-all duration-700  cursor-pointer" src={about_img} alt=""  style={{ boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)' }} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 p-2'>
        <p className='text-1xl md:text-lg'>Know About Us</p>
        <div className='text-2xl text-teal-500 font-bold '>
            <Title text1={"ABOUT"} text2={' PRIME TECHLOGIX'}/>
          </div>
          <p className='md:text-lg'>Prime Techlogix is leading and evolving the traditional way organizations used to deal with their consumers.</p>
          <p className='md:text-lg'>Founded in 2024, Prime Techlogix is a tech startup dedicated to empowering businesses with innovative solutions. Our team of passionate developers and designers is committed to delivering cutting-edge products and services that drive growth and success.</p> 
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
     <Link
          to='/about'
          className='text-xs sm:text-sm'
        >
          <Button gradientDuoTone='greenToBlue' outline >
        Read More 
       </Button>
        </Link>
        </div>
        </div>
          </div>  
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <div>
            <div className='text-2xl font-bold text-teal-500 text-center pt-8 '>
            <Title text1={"RECENT"} text2={' POSTS'}/>
            </div>
            <p className='text-center'>Dive into the latest tech trends and innovations.</p>
          </div>
            <div className='flex flex-wrap gap-4 mx-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
     

      {/* Services */}
      <div className='max-w-6xl mx-auto sm:p-3 flex flex-col gap-8 py-7'>
        
          <div className='flex flex-col gap-6'>
            
          <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className="sm:hidden shadow-2xl w-full md:max-w-[450px] rounded-tl-[30px] rounded-br-[30px] hover:scale-105 transition-all duration-700  cursor-pointer" src={our_services} alt=""  style={{ boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)' }} />
      
        <div className='flex flex-col justify-center gap-6 md:w-2/4 p-2'>
        <p className='text-1xl md:text-lg'>What We’re Offering</p>
        <div className='text-2xl text-teal-500 font-bold '>
            <Title text1={"SERVICES WE’"} text2={' RE PROVIDING'}/>
          </div>
          <p className='md:text-lg'>We bring you award-winning products, advanced UI / UX, and world-class web talent and mobile platforms that bridge the gap between the creative world and technology. At Prime Techlogix, our solutions become the kind of technology that others are promoting.</p>
          <p className='md:text-lg'>We offer a complete range of “BPO” solution services which are rooted by our expertise and subtle knowledge of customer behavior and the business industry.</p> 
     
     <Link
          to='/services'
          className='text-xs sm:text-sm'
        >
          <Button gradientDuoTone='greenToBlue' outline >
        View more services
       </Button>
        </Link>
        </div>
        <img className="hidden sm:block shadow-2xl w-full md:max-w-[450px]  rounded-tl-[30px] rounded-br-[30px] hover:scale-105 transition-all duration-700  cursor-pointer" src={our_services} alt=""  style={{ boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)' }} />
        </div>
        
          </div>  
          
      </div>
      
        <div className='p-3 bg-slate-200 dark:bg-gray-800'>
        <Clients/>
        </div>

      {/* projects */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {project && project.length > 0 && (
          <div className='flex flex-col gap-6'>
            <div>
            <div className='text-2xl text-center pt-8 font-bold text-teal-500 '>
            <Title text1={"OUR LAT"} text2={'EST WORK'}/>
            </div>
            <p className='text-center'>Our most recent work, showcasing our skills and expertise.</p>
          </div>
            <div className='flex flex-wrap gap-4 mx-4'>
              {project.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
            <Link
              to={currentUser ? '/projects' : '/sign-in'}
              className='text-lg text-teal-500 hover:underline text-center'
              onClick={() => {
                if (!currentUser) {
                  alert('Please sign in to view projects.');
                }
              }}
            >
              View all projects
            </Link>
          </div>
        )}
      </div>
      <div className='p-3'>
        <Testimonials/>
      </div>
      <div className='p-3 bg-slate-200 dark:bg-gray-800'>
      <Newsletter/>
      </div>

    </div>
  );
}