import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function ContactUs() {

  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }


    const gmail = async () => {

      try {
            const response = await axios.post('https://rcfback.onrender.com/sendmsg', form, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            }

            

        )

        console.log(response);
        setForm({})

        sendMessage();
      }
      catch (error) {
        console.error(error);
      }
    };

  
   
  const sendMessage = () => {
    alert("Message Sent Successfully")
  }

  
  

  
    return (
      <div className='justify-between w-full'>
        {/* Contact heading */}
      <div className='h-[400px] lg:h-[582px] w-full  flex flex-col items-center justify-center bg-[#253E52] gap-4'> 
          <h1 className='font-shippori semi-bold text-white text-center text-3xl mb-5'>Contact Us</h1>
     
          <p className='lg:w-[40%] w-[80%] semi-bold text-center font-poppins text-white'>We're here to support you at every step of your academic and career journey! Whether you have questions about our resources, need guidance on using our features, or want to share feedback, the StudentCorner team is always ready to assist you. Reach out to us anytime!</p>
      
        </div>
       
        {/* Contact heading end */}

      <div className="py-20 md:max-w-5xl mx-auto ml-10justify-center w-[90%]">

      <div className="lg:flex flex-row justify-center gap-8 mt-12">
           
            {/* Contact Info */}
            <div className='bg-white justify-center pt-8'>
            <h1 className='text-2xl font-shippori semi-bold mb-5'>Get In Touch</h1>
            <p className="text-[#787878] font-poppins text-base  text-left">Have questions, feedback, or need assistance? Our team is here to help! Feel free to reach out using the details below.</p>
            
             {/* icon tags */}
      <div className="flex space-x-4 mt-10 w-56">
              <a href="https://rcft044@gmail.com" target='-blank'><img src='./images/gmail.png' alt="" className='w-12'/></a>
              
              <a href="https://x.com/TrustRcf?t=KYkn1lYzQxKTU7-6nwTrMw&s=08 " target='-blank'><img src='./images/x.png' alt="" className='w-12 '/></a>
              
              <a href="https://wa.me/918505895489" target='-blank'><img src='./images/whatsapp.png' alt="" className='w-12'/></a>
              
              <a href="https://www.facebook.com/share/1BcZnFZ1cK/" target='-blank'><img src='./images/fb.png' alt="" className='w-12'/></a>
              
              <a href="https://www.instagram.com/trustrcf/#" target='-blank'><img src='./images/instagram.png' alt="" className='w-12'/></a>

              </div>
              {/* Map */}
              <div className='overflow-hidden display-block w-full object-cover rounded-xl mt-20 mb-8'>
              <a href="./map"><img src='./images/map.png' alt="" className="hover:scale-110 duration-500 transition-transform  w-full"/></a>
              </div>
            </div>
            
                {/* Contact Form */}

              <div className="bg-[#f4f3f3] w-full p-8 rounded-lg flex flex-col gap-8">
              <h1 className="text-2xl font-semibold font-shippori">Send Us a Message</h1>

              <div className='font-poppins semi-bold flex flex-col gap-2'>
              <div className='flex flex-col lg:flex-row gap-2'>

              <div className='flex flex-col gap-2 '>

              <label>Full Name</label>
              <input className='placeholder:bg-[#FFFFFF]  rounded-md pl-4 shadow-sm text-[#787878] sm:text-sm w-60 h-11 mr-5' type="text" placeholder='Enter your name' name='name' value={form.name} onChange={handleChange}/>
              </div>

              <div className='flex flex-col gap-2'>
              <label>Email Address</label>
              <input className='placeholder:bg-[#FFFFFF] rounded-md pl-4 shadow-sm text-[#787878] sm:text-sm w-60 h-11 mr-5' type="email" placeholder='Enter your email' name='email' value={form.email} onChange={handleChange}/>
              </div>

              </div>
              
              <div className='flex flex-col gap-2'>
              <label className='mt-4'>Mobile Number</label>
              <input className='placeholder:bg-[#FFFFFF] rounded-md pl-4 shadow-sm text-[#787878] sm:text-sm w-60 h-11' type="text" placeholder='Enter your mobile number' name='mobile' value={form.mobile} onChange={handleChange}/>
              </div>

              <div className='flex flex-col gap-2'>
              <label className='mt-8'>Your suggestions and feedbacks</label>
              <textarea placeholder='Your Feedback' className='placeholder:bg-[#FFFFFF] text-[#787878] pl-4 py-4 sm:text-sm w-[95%] h-40 rounded-md'  name='msg' value={form.msg} onChange={handleChange}></textarea>
              </div>
              </div>

              {/* Send Message Button */}
              <button onClick={gmail} className="w-40 bg-[#034C5B] text-white py-3 mb-20 rounded-full cursor-pointer">Send Message  
              </button>
        </div>
      </div>
    </div>
  </div>
      
    )
}

export default ContactUs;
