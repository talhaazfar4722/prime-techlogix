import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth'
import vite from '../assets/vite.svg'

export default function SignUp() {

  const[formData, setFormData] = useState({})
  const[errorMessage, setErrorMessage] = useState(null)
  const[loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()});  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields. ')
    }
    try {
      setLoading(true)
      setErrorMessage(null)
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success === false) {
        return setErrorMessage(data.message)
      }
      setLoading(false)
      if (res.ok) {
        navigate('/sign-in')
      }
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
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
              <Label value='Your username'/>
              <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}/>
            </div>
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
                'Sign Up'
            )}
            </button>
            {/* </Button> */}
            <OAuth/>
          </form>
           <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
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
