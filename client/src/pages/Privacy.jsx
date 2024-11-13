import React from 'react'
import Newsletter from '../components/Newsletter'
import Title from '../components/Title'
import privacy from '../assets/privacy.jpg'


const Privacy = () => {
  return (
    <div>
    <div className=''>
    <img
          src={privacy}
  
          className='mt-10 sm:max-h-[600px] w-full object-cover'
        />
      <div className='text-2xl text-center pt-8 '>
        <Title text1={"PRIVACY"} text2={' POLICY'}/>
      </div>
       
       <div className='flex flex-col justify-center gap-6 mt-5 p-2 '>
        <p>
        <b>Prime Techlogix </b> 
        respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and disclose your information when you use our website, services, or interact with us.
        </p>
        <b>Information We Collect: </b>
        <p>
        We may collect the following types of personal information:
        </p>
        <p>
        <b>Personal Information: </b> 
        Name, email address, phone number, and other contact details.
        </p>
        <p>
        <b>Usage Data: </b> 
        Information about how you use our services, such as your IP address, browser type, device information, and browsing history.
        </p>
        <p>
        <b>Payment Information: </b>
        Credit card or other payment information when making purchases.
        </p>
        <b>How We Use Your Information</b>
        <p>We may use your information to:</p>
        <p>
        Provide and improve our services.<br/>
        Process payments and fulfill orders.<br/>
        Respond to your inquiries and support requests.<br/>
        Send you marketing communications and updates.<br/>
        Analyze usage patterns to enhance our services.<br/>
        Comply with legal obligations and protect our rights.
        </p>
        <b>Information Sharing</b>
        <p>We may share your information with:</p>
        
        <p>
        <b>Third-Party Service Providers: </b> 
        We may engage trusted third-party service providers to assist us in providing our services, such as payment processing, email delivery, and analytics.   
        </p>
        <p>
        <b>Legal Authorities: </b>
        We may disclose your information if required by law or to protect our rights or the rights of others.
        </p>
       <b>Data Security</b>
        <p>
        We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, please note that no security system is perfect, and we cannot guarantee the absolute security of your information. 
        </p>
        <b>What are Cookies?</b>
        <p>
        Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widelyused to make websites work more efficiently, as well as to provide information to the website owner.   
        </p>
        <b>How We Use Cookies</b>
        <p>    
        <b>Prime Techlogix </b> 
        uses cookies to:
        </p>
        <p>
        <b>Improve website performance: </b>
        Cookies help us understand how our website is used, so we can make improvements.
        </p>
        <p>
        <b>Enhance user experience: </b>
        Cookies can be used to personalize your experience on our website, such as remembering your preferences.
        </p>
        <p>
        <b>Track website traffic: </b>
        We use cookies to monitor website traffic and identify popular pages.
        </p>
        <p>
        <b>Target advertising:</b>
        Cookies may be used to deliver targeted advertising based on your interests.
        </p>
       <b>Types of Cookies We Use</b>
        <p>
        <b>Session Cookies: </b>
        These cookies are temporary and are deleted when you close your browser.
        </p>
        <p>
        <b>Persistent Cookies: </b>
        These cookies remain on your device for a specified period of time.
        </p>
        <b>Controlling Cookies</b>
        <p>
        You can control and manage cookies through your web browser settings. You can choose to accept all cookies, reject all cookies, or select which cookies to accept. 
        Please note that disabling cookies may affect the functionality of our website.   
        </p>
        <b>For more information on how to manage cookies, please visit:</b>
        <b>AboutCookies.org:</b> 
        <a href="https://www.kaspersky.com/resource-center/definitions/cookies"
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 underline'
        
        >
        https://www.kaspersky.com/resource-center/definitions/cookies
        </a>
        <b>Your Rights</b>
        <p>
        You may have certain rights regarding your personal information, such as the right to access, rectify, or erase your data. You may also have the right to object to or restrict certain processing activities. 
        </p> 
        <b>Changes to This Privacy Policy</b>
        <p>
        We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website.   
        </p>
        <b>Contact Us</b>
        <p>
        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at &nbsp;
        <a href="mailto:primetechlogix@gmail.com" 
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 underline'
        >
          primetechlogix@gmail.com</a>. 
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

export default Privacy
