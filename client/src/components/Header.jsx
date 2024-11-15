import React from 'react'
import {Avatar, Button, Dropdown, Navbar, TextInput} from 'flowbite-react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon,FaSun} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice.js' ;
import { useEffect, useState } from 'react';
import vite from '../assets/vite.svg'



export default function Header() {

    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state=>state.user);
    const { theme } = useSelector((state) => state.theme);

    // for search functionality
    const location = useLocation();
    const navigate = useNavigate();

    // for search functionality
    const [searchTerm, setSearchTerm] = useState('');
     useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

    // signout functionality
    const handleSignout = async () => {
      try {
        const res = await fetch('/api/user/signout', {
          method: 'POST',
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
        } else {
          dispatch(signoutSuccess());
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    // for search functionality
    const handleSubmit = (e) => {
      e.preventDefault();
      const urlParams = new URLSearchParams(location.search);
      urlParams.set('searchTerm', searchTerm);
      const searchQuery = urlParams.toString();
      navigate(`/search?${searchQuery}`);
    };

    
  

  return (
    <Navbar className='border  border-teal-500 dark:border-teal-500'>
      
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-teal-500 dark:text-white flex items-center'>
  <img src={vite} alt="" className="mr-2 w-10 h-10" />
  <span className="py-1 text-[20px] sm:text-[23px] text-teal-500 font-bold">PrimeTechlogix</span>
</Link>

         {/* for search */}
         <form onSubmit={handleSubmit}>
            <TextInput 
            type='text' 
            placeholder='Search....'
            className='hidden  lg:inline'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
             />
         </form>
         

            {/* <AiOutlineSearch className='text-2xl sm:hidden'/> */}
         
      
       {/* light mode dark mode */}
         <div className='flex gap-2 md:order-2' >
         <Button
          className='w-12 h-10  sm:inline border border-teal-500 dark:border-teal-500'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>

            {/* if user exist it shows pic while if it doesnt exist it shows sign in button */}
            {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </Dropdown.Header>
            {currentUser && currentUser.isAdmin && (
            <Link to='/dashboard?tab=dash'>
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Link>
            )}
            <Dropdown.Divider />
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='greenToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}
            <Navbar.Toggle/>
         </div>
            <Navbar.Collapse>

                <Link to='/' >
                <Navbar.Link active={path === '/' } as={'div'}>
                       Home
                </Navbar.Link>
                </Link>

                <Link to='/about'>
                <Navbar.Link active={path === '/about'} as={'div'}>
                       About Us
                </Navbar.Link>
                </Link>

                <Link to='/search'>
                <Navbar.Link active={path === '/search'} as={'div'}>
                       Blogs
                </Navbar.Link>
                </Link>

                <Link to='/services'>
                <Navbar.Link active={path === '/services'} as={'div'} >
                       Services
                </Navbar.Link>
                </Link>

                <Link
                 to={currentUser ? '/projects' : '/sign-in'} 
                onClick={() => {
                if (!currentUser) {
                  alert('Please sign in to view projects.');
                }
              }}>
                <Navbar.Link active={path === '/projects'} as={'div'} >
                Projects
              </Navbar.Link>  
              </Link>

              <Link to='/contact'>
                <Navbar.Link active={path === '/contact'} as={'div'}>
                       Contact Us
                </Navbar.Link>
                </Link>

    </Navbar.Collapse>
    
    </Navbar>
  )
}
