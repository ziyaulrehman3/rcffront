
import React from 'react';

export default function MainImgFrame(){

    return(
        <div className=' relative w-full h-[500px] lg:h-[80vh] p-0'>  
            <img src='https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740397994/image_jjlgkr.jpg' alt='Our Work Main' className='w-full h-full object-cover'/>
            <div className='w-full h-full bg-black absolute top-0 bg-opacity-60'></div>
            <div className='w-full h-full absolute top-0 bg-opacity-0 flex flex-col justify-center items-center text-white gap-5'>
                <h1 className='font-shippori text-4xl lg:text-5xl md:text-3xl w-[70%] lg:w-[40%] text-center tracking-[0.06em]'>Together for a Better Tomorrow</h1>
                <p className='w-[75%] lg:w-[40%]  text-center text-xl  font-poppins'>With unwavering commitment, we work towards a world filled with hope and opportunity.</p>
            </div>
        </div>
    )
}