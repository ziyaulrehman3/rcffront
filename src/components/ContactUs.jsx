import { useEffect, useState } from 'react';
import axios from 'axios';

function ContactUs() {

  const gmail = async () => {
    try {
      const response = await axios.post('https://www.googleapis.com/gmail/v1/users/me/messages');
      console.log(response);
    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    gmail();
  }, []);
   
  const sendMessage = () => {
    alert("Message Sent Successfully")
  }

  const [form, setForm] = useState({Name: "", email: "", mobileno: "", feedback: ""})
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }
    return (
      <div className='w-full'>
      
           <div class='h-[450px] lg:h-[582px] w-full flex flex-col items-center justify-center bg-[#253E52] gap-4'> 
               <h1 className='font-shippori semi-bold text-white text-center text-4xl lg:text-5xl mb-5'>Contact Us</h1>
         
              <p className='w-[80%] md:[70%] text-center font-poppins text-white'>We’re here to support you at every step of your academic and career journey! Whether you have questions about our resources, need guidance on using our features, or want to share feedback, the StudentCorner team is always ready to assist you. Reach out to us anytime!</p>
        
          </div>

          

       <div className="pt-20 md:mx-auto w-[80%]">

            <div className="flex flex-col md:flex-row gap-8 mt-12 w-[50%] bg-white">
             
               {/* Contact Info */}

               <div className=''>

                   <h1 className='text-2xl font-shippori semi-bold mb-5'>Get In Touch</h1>
                   <p className="text-[#787878] font-poppins text-base  text-left">Have questions, feedback, or need assistance? Our team is here to help! Feel free to reach out using the details below.</p>
            
                    <div className="flex space-x-4 mt-10 w-60">
                       <a href="https://rcft044@gmail.com" target='-blank'><img src='https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740355085/ytqccv64ekfzesegwap1.jpg' alt="" className='w-14'/></a>
                       <a href="https://x.com/TrustRcf?t=KYkn1lYzQxKTU7-6nwTrMw&s=08 " target='-blank'><img src='https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740355085/ytqccv64ekfzesegwap1.jpg' alt="" className='w-14'/></a>
                       <a href="https://wa.me/918505895489" target='-blank'><img src='https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740355085/ytqccv64ekfzesegwap1.jpg' alt="" className='w-14'/></a>
                       <a href="https://www.facebook.com/share/1BcZnFZ1cK/" target='-blank'><img src='https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740355085/ytqccv64ekfzesegwap1.jpg' alt="" className='w-12'/></a>
                       <a href="https://www.instagram.com/trustrcf/#" target='-blank'><img src='https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740355085/ytqccv64ekfzesegwap1.jpg' alt="" className='w-12'/></a>
                    </div>

                </div> 
     
               <a href="./map"><img src='https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740355085/ytqccv64ekfzesegwap1.jpg' alt="" className="mt-20 mb-8 w-full"/></a>
          
            </div>
      
          {/* Contact Form */}

        <div className="bg-[#f4f3f3] w-full  p-8 rounded-lg flex flex-col gap-8">
        
            <h1 className="text-2xl font-semibold font-shippori">Send Us a Message</h1>

             <div className='font-poppins semi-bold flex flex-col gap-2'>
             
                   <div className='flex flex-row gap-2'>
          
                        <div className='flex flex-col gap-2 '>
                             <label>Full Name</label>
                             <input className='placeholder:bg-[#FFFFFF]  rounded-md pl-4 shadow-sm text-[#787878] sm:text-sm w-60 h-11 mr-5' type="text" placeholder='Enter your name' name='Name' value={form.name} onChange={handleChange}/>
                        </div>
                
                        <div className='flex flex-col gap-2'>
                             <label>Email Address</label>
                             <input className='placeholder:bg-[#FFFFFF] rounded-md pl-4 shadow-sm text-[#787878] sm:text-sm w-60 h-11 mr-5' type="email" placeholder='Enter your email' name='email' value={form.email} onChange={handleChange}/>
                        </div>
          
                   </div>
             
                   <div className='flex flex-col gap-2'>
                      <label className='mt-4'>Mobile Number</label>
                      <input className='placeholder:bg-[#FFFFFF] rounded-md pl-4 shadow-sm text-[#787878] sm:text-sm w-60 h-11' type="text" placeholder='Enter your mobile number' name='mobileno' value={form.mobileno} onChange={handleChange}/>
                   </div>
          
                   <div className='flex flex-col gap-2'>
                      <label className='mt-8'>Your suggestions and feedbacks</label>
                      <textarea placeholder='Your Feedback' className='placeholder:bg-[#FFFFFF] text-[#787878] pl-4 py-4 sm:text-sm w-96 h-40 rounded-md'  name='feedback' value={form.feedback} onChange={handleChange}></textarea>
                   </div>
     
             </div>
        
            <button onClick={sendMessage} className="w-40 bg-[#034C5B] text-white py-3 mb-20 rounded-full cursor-pointer">Send Message</button>
  
        </div>
        
      </div>

      
  </div>
      
    )
}

export default ContactUs;
