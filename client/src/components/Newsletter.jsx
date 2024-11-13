import { Button, Label, Spinner, Textarea, TextInput } from 'flowbite-react';
import React, { useRef, useState } from 'react';
import Title from './Title';
import emailjs from '@emailjs/browser';

const Newsletter = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm('service_mvm27os', 'template_2mud5o4', form.current, {
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
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <div className="text-center">
        <div className="text-2xl text-center pt-8 ">
          <Title text1={"Drop "} text2={'your email'} />
        </div>
        <p className=" mt-3">Drop your email address and we'll reach out to you soon.</p>
        <div className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3">
          <input
            type="email"
            name="from_email"
            className="w-full sm:flex-1 outline-none border border-teal-500"
            style={{ padding: 10 }}
            placeholder="Enter your email"
            required
          />
          <Button
            gradientDuoTone="greenToBlue"
            type="submit"
           
            disabled={isSending}
          >
            {isSending ? <Spinner /> : 'Contact'}
          </Button>
        </div>
        {successMessage && (
          <p className="text-green-500 text-center mt-2">{successMessage}</p>
        )}
      </div>
    </form>
  );
};

export default Newsletter;