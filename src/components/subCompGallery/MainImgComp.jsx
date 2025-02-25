import {Link} from 'react-router-dom'

export default function MainImgFrame(){

    return(
        <div className='relative w-full md:w-[80%] h-[350px] lg:h-[450px] p-0 m-auto'>
            <img src='https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740425908/image_9_e7tfr9.png' alt='Our Work Main Image' className='w-full h-full object-cover'/>
            <div className='w-full h-full bg-black absolute top-0 bg-opacity-60'></div>
            <div className='w-full h-full absolute bottom-5 md:bottom-16 left-0 pl-2 md:left-16 bg-opacity-0 flex flex-col justify-end	 items-start text-white gap-4'>
                <h1 className='font-serif text-3xl md:text-3xl w-[70%] lg:w-[35%]'>Smile Mission - Free Health Checkup Camp</h1>
                <p className='w-[75%] lg:w-[40%] text-lg'>Protecting Smile of Everyone</p>
                <Link className='border rounded-2xl w-32 h-8 flex justify-center items-center' to='/Donation' >Donate Now</Link>
            </div>
        </div>
    )
}