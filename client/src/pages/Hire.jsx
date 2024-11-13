import { Alert, Button, Label, Spinner, Textarea, TextInput } from 'flowbite-react'
import { Link,useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Hire() {

  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm('service_mvm27os', 'template_c3bmg7k', form.current, {
        publicKey: '2VxqHocdD01cCV-7G',
      })
      .then(() => {
        setIsSending(false);
        setSuccessMessage('Email sent successfully!');
        // Optionally, reload the page after a delay
        setTimeout(() => {
          window.location.reload();
        }, 2000); // Reload after 2 seconds
      })
      .catch((error) => {
        setIsSending(false);
        console.log('FAILED...', error.text);
        // Handle error, e.g., display an error message
      });
  };
 
 
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex flex-col p-3 max-w-3xl mx-auto md:flex-row md:items-center gap-5'>

        {/* Left Side div */}
        <div className="flex-1">

        <Link to='/' className='font-bold dark:text-white text-4xl'>
        <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"Lets"} text2={' Talk'}/>
      </div>
            
         </Link>
         <p className='text-1xl mt-5'>Ready to discuss your next project? We're here to listen and provide expert solutions. Contact us today to schedule a consultation. We are currently available to take new projects, so feel free to contact us : </p>
         <p className='text-1xl mt-2'>primetechlogix@gmail.com</p>
         <p className='text-1xl mt-2'>prime_techlogix</p>
         <p className='text-1xl mt-2'>+923024387800</p>
         <p className='text-1xl mt-2'>Lahore</p>

        </div>

        {/* Right Side div */}
        
        <div className="flex-1">
       
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4' >
            <div>
              <Label value='Your name'/>
              <TextInput type='text' name='from_name' placeholder='Enter your name' id='name' required />
            </div>
            <div>
              <Label value='Your email'/>
              <TextInput type='email' name='from_email' placeholder='Enter your email' id='email' required/>
            </div>
            <div>
              <Label value='Describe your project'/>
              <Textarea name='message' rows='8' placeholder='Type your message...' id='message' required />
            </div>
            <Button gradientDuoTone='greenToBlue' type='submit' disabled={isSending} >
            {isSending ? <Spinner /> : 'Submit'}
            </Button>
            {successMessage && (
          <p className="text-green-500 text-center mt-2">{successMessage}</p>
        )}
          </form>
          
           
        </div>
      </div>
    </div>
  )
}
