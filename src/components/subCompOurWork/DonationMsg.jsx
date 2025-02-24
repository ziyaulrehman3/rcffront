import ViewButton from './ViewButton';

export default function DonationMsg(){

    return (
        <div class='flex flex-col justify-center items-center py-12'>
            <p className='text-center w-[90%] lg:w-[70%] text-[#787878]'>Your support can make a difference! Every contribution helps us bring positive change and support those in need. Join us in our mission donate today and be a part of something meaningful.</p>
            <ViewButton text='Donation Now' path='/Donation'/>
       </div>
    )
}