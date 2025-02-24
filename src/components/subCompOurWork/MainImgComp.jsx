import ViewButton from './ViewButton'


export default function MainImgFrame(){

    return(
        <div className=' relative w-full h-[350px] lg:h-[450px] p-0'>
            <img src='https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740260408/image_8_ynbumr.png' alt='Our Work Main Image' className='w-full h-full object-cover'/>
            <div className='w-full h-full bg-black absolute top-0 bg-opacity-60'></div>
            <div className='w-full h-full absolute top-0 bg-opacity-0 flex flex-col justify-center items-center text-white gap-5'>
                <h1 className='font-serif text-3xl md:text-4xl w-[70%] lg:w-[35%] text-center'>Our Work: Making a Difference Together</h1>
                <p className='w-[75%] lg:w-[40%] text-center text-xl'>With unwavering commitment, we work towards a world filled with hope and opportunity.</p>
                <ViewButton text='Donation Now' path='/Donation'/>
            </div>
        </div>
    )
}