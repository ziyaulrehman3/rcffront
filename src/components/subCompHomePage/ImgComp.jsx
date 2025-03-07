import React from 'react';
export default function ImgComp() {
  return (
    <div className=" w-full h-[65%] flex flex-col relative">
     
      {/* Image Component */}

       <img className='h-[500px] md:h-[600px] lg:h-[100%] sm:w-full object-cover' src='https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740470337/boy_bemvau.jpg' alt='Boy'/>

        {/* Gradient Overlay */}
        <div
          className="h-full w-full absolute top-0 rounded-none md:rounded-[5px]  opacity-80"
          style={{
            background:
              'linear-gradient(to bottom, rgba(21, 144, 174,0.6) 0%, rgba(9, 60, 72,0.5) 100%)',
          }}
        ></div>

        <div className=" flex flex-col absolute top-0 items-start justify-center text-white h-full w-full pl-4 ">

              <h3 className="text-[26px] font-regular lg:text-2xl font-shippori">
                Helping Hands, Changing Lives
              </h3>
    
              <p className="mt-6 tracking-[0.05em] leading-[1.44em]">
                Our mission is to uplift underprivileged communities through
                humanitarian aid, skill development, and social welfare initiatives.
              </p>
    
              {/* Join Us Button */}
              
              <button className="mt-8 px-6 py-2 tracking-[0.05em] font-medium text-white border-2 border-strokeyellow rounded-full">
                Join Us
              </button>

          </div>
          
        </div>
    
  )}





