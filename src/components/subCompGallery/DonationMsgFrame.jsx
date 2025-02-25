import {Link} from 'react-router-dom'

export function DonationMsgFrame1(){
    return (
        <div className='w-[80%] md:w-1/3 aspect-[4/5] bg-white flex text-center flex-col items-center justify-center m-auto gap-5'>
         
           <h1 className='font-shippori w-[95%] font-medium'>Smile Mission - Free Health Checkup Camp</h1>
           <p className='font-poppins w-[95%] text-[#E3501F] text-sm'>Be a part of this</p>
           <p className='font-poppins w-[95%] text-[#787878] text-sm'>A health and wellness camp offering free medical checkups and consultations.</p>
           <Link className='font-poppins text-white bg-[#F0CF10] rounded-2xl w-32 h-8 text-base flex justify-center items-center' to='/Donation'>Donate</Link>
        </div>
    )
}


export function DonationMsgFrame2(){
    return (
        <div className='w-[80%] md:w-1/3 aspect-[4/5] bg-white flex text-center flex-col items-center justify-center m-auto gap-5'>
         
           <h1 className='font-shippori w-[95%] font-medium'>Hope for All – Food Drive</h1>
           <p className='font-poppins w-[95%] text-[#E3501F] text-sm'>Be a part of this</p>
           <p className='font-poppins w-[95%] text-[#787878] text-sm'>A community-driven initiative to distribute food packages to underprivileged families.</p>
           <Link className='font-poppins text-white bg-[#F0CF10] rounded-2xl w-32 h-8 text-base flex justify-center items-center' to='/Donation'>Donate</Link>
        </div>
    )
}


export function DonationMsgFrame3(){
    return (
        <div className='w-[80%] md:w-1/3 aspect-[4/5] bg-white flex text-center flex-col items-center justify-center m-auto gap-5'>
         
           <h1 className='font-shippori w-[95%] font-medium'>Green Future – Tree Plantation Drive</h1>
           <p className='font-poppins w-[95%] text-[#E3501F] text-sm'>Be a part of this</p>
           <p className='font-poppins w-[95%] text-[#787878] text-sm'>A sustainability campaign focused on planting trees and spreading environmental</p>
           <Link className='font-poppins text-white bg-[#F0CF10] rounded-2xl w-32 h-8 text-base flex justify-center items-center' to='/Donation'>Donate</Link>
        </div>
    )
}