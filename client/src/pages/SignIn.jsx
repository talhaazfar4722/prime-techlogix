import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';
import vite from '../assets/vite.svg'

export default function Signin() {

  const[formData, setFormData] = useState({})
  const {loading,error: errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()});  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill out all fields. '))
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/Signin',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success === false) {
        dispatch(signInFailure(data.message))
        
      }
      
      if (res.ok) {
        dispatch(signInSuccess(data))
        navigate('/')
      }
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
   
  }

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex flex-col p-3 max-w-3xl mx-auto md:flex-row md:items-center gap-5'>
        {/* Left Side div */}
        <div className="flex-1">

        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-teal-500 dark:text-white flex items-center'>
        <img src={vite} alt="" className="mr-2" />
        <span className="py-1 text-2xl text-teal-500 font-bold">PrimeTechlogix</span>
      </Link>
         <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem commodi veritatis molestias reprehenderit provident. Eligendi molestiae asperiores perferendis, odio harum animi modi cumque ea mollitia quo eum eveniet id!</p>

        </div>
        {/* Right Side div */}
        <div className="flex-1">

          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          
            <div>
              <Label value='Your email'/>
              <TextInput type='email' placeholder='Email' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value='Your password'/>
              <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}/>
            </div>
            {/* <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}> */}
            <button type='submit' disabled={loading} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            {
              loading ? (
                <>
                <Spinner size='sm'/>
                <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign In'
            )}
            </button>
            {/* </Button> */}
            <OAuth/>
          </form>
           <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign Up
            </Link>
           </div>
           {
            errorMessage &&(
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
           }
        </div>
      </div>
    </div>
  )
}
