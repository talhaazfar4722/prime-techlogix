import { Footer } from 'flowbite-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {BsFacebook,BsInstagram,BsWhatsapp,BsDribbble,BsGithub} from 'react-icons/bs'
import vite from '../assets/vite.svg'
import { useDispatch, useSelector } from 'react-redux';


export default function FooterComp() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state=>state.user);

  return (
    <Footer container className='border border-t-8 border-teal-500  '>
      <div className='w-full max-w-7xl mx-auto'>
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
          
         <div>
         <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-teal-500 dark:text-white flex items-center'>
        <img src={vite} alt="" className="mr-2" />
        <span className="py-1 text-2xl text-teal-500 font-bold">PrimeTechlogix</span>
      </Link>
            <p className='w-full md:w-2/3 mt-5'>
            Prime Techlogix is your trusted partner for innovative IT solutions. <br /> We empower businesses with cutting-edge technology to drive growth and success.  <br /> Contact us today to explore how we can help you achieve your digital goals.          </p>
        </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
            <Footer.Title title='Company' className='text-1xl'/>
            <Footer.LinkGroup col>
              <Footer.Link href='/' >
                Home
              </Footer.Link>
              <Footer.Link href='/about' >
                About Us
              </Footer.Link>
              <Footer.Link href='/search' >
                Posts
              </Footer.Link>
              <Link to={currentUser ? '/projects' : '/sign-in'}
              className=" hover:underline"
              onClick={() => {
                if (!currentUser) {
                  alert('Please sign in to view projects.');
                }
              }}
               >
                Projects
              </Link>
              <Footer.Link href='/services' >
                Services
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            

            <div>
            <Footer.Title title='Legal' className='text-1xl'/>
            <Footer.LinkGroup col>
              <Footer.Link href='/privacy-policy'>
                Privacy Policy
              </Footer.Link>
              <Footer.Link href='/terms-and-conditions'>
                Terms and <br/> Conditions
              </Footer.Link>
              <Footer.Link href='/hire-us'>
                Hire Us
              </Footer.Link>
            </Footer.LinkGroup>
            </div>

            <div>
            <Footer.Title title='Get in touch' className='text-1xl' />
            <Footer.LinkGroup col>
            <Footer.Link href='https://wa.link/auobd7' 
              target='_blank'
              rel='noopener noreferrer'
              >
                +923024387800
              </Footer.Link>
              <Footer.Link href='mailto:primetechlogix@gmail.com' 
              target='_blank'
              rel='noopener noreferrer'
              >
                primetechlogix@gmail.com
              </Footer.Link>
              <Footer.Link href='https://www.instagram.com/prime_techlogix?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' 
              target='_blank'
              rel='noopener noreferrer'
              >
                prime_techlogix
              </Footer.Link>
              <Footer.Link href='/contact'>
                Contact Us
              </Footer.Link>
            </Footer.LinkGroup>
            </div>

          </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href='#' by="TalhaAzfar / All Rights reserved" year={new Date().getFullYear()}/>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='https://wa.link/auobd7' icon={BsWhatsapp} 
             target='_blank'
             rel='noopener noreferrer'
            />
            <Footer.Icon href='https://www.instagram.com/prime_techlogix?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' icon={BsInstagram} 
             target='_blank'
            rel='noopener noreferrer'
              />
            <Footer.Icon href='#' icon={BsGithub}/>
            <Footer.Icon href='#' icon={BsDribbble}/>
          </div>
        </div>
      </div>
    </Footer>
  )
}
