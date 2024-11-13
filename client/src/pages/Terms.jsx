import React from 'react'
import Newsletter from '../components/Newsletter'
import Title from '../components/Title'
import terms from '../assets/terms.jpeg'


const Terms = () => {
  return (
    <div>
    <div className=''>

    <img
          src={terms}
  
          className='mt-10 sm:max-h-[400px] border-t w-full object-cover'
        />
        
      <div className='text-2xl text-center pt-8 '>
        <Title text1={"TERMS"} text2={' AND CONDITIONS'}/>
      </div>
      
       
       <div className='flex flex-col justify-center gap-6 mt-5 p-2'>
        
        <b>Please read these Terms and Conditions carefully before using our services. </b> 
        <b>1. Acceptance of Terms </b>
        <p>
        By accessing or using any of our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.   
        </p>
        <b>2. Services</b> 
        <p>
        We provide a range of IT services, including but not limited to:
        </p>
        <p>
        Web development<br/>
        Mobile app development<br/>
        Responsive web and app designing<br/>
        UI/UX Designing<br/>
        Cloud solutions<br/>
        Cybersecurity<br/>
        AI and machine learning<br/>
        Data analytics<br/>
        Digital marketing
        </p>
        <b>3. Intellectual Property</b>
        <p>
        All intellectual property rights, including copyrights, trademarks, and patents, related to our services and website are owned by [Your Company Name] or its licensors. You may not use, reproduce, or distribute any of our intellectual property without our prior written consent.
        </p>     
       <b>4. User Conduct</b>
        <p>
        You agree to use our services in a lawful and ethical manner. You may not:
        </p>
        <p>
        Use our services to harm others or violate any laws.<br/>
        Interfere with our services or infrastructure.<br/>
        Attempt to gain unauthorized access to our systems or networks.
        </p>
        <b>5. Limitation of Liability</b>
        <p>
        To the maximum extent permitted by law, <b>Prime Techlogix</b> shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.   
        </p>
        <b>6. Indemnification</b>
        <p>
        You agree to indemnify and hold <b>Prime Techlogix</b> harmless from any claims, damages, losses, liabilities, and costs arising out of your use of our services or violation of these Terms and Conditions.
        </p>
        <b>7. Modification of Terms</b>
        <p>
        We reserve the right to modify these Terms and Conditions at any time without prior notice. Your continued use of our services after any modifications constitutes your acceptance of the revised Terms and Conditions.   
        </p>
        <b>8. Termination</b>
        <p>
        We may terminate your access to our services at any time, with or without cause, and with or without notice.
        </p>
        <b>9. Governing Law</b>
        <p>
        These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction].
        </p>
         </div>
      
      <div className='text-xl py-6'>
        
      </div>
      </div>
      <div className='p-3 bg-slate-200 dark:bg-gray-800'>
      <Newsletter/>
      </div>
     
    </div>
  )
}

export default Terms
