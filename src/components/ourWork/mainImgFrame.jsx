export default function MainImgFrame(){

    return(
        <div className=' relative w-full h-96 p-0'>
            <img src='/images/ourWorkImgMain.png' alt='Our Work Main Image' className='w-full h-full object-cover'/>
            <div className='w-full h-full bg-black absolute top-0 bg-opacity-75'></div>
        </div>
    )
}