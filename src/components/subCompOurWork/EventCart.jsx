import ViewButton from './ViewButton'

export default function EventCart({title,date,location,desc,eventId,image,design}){

    let newDate=String(date).slice(0,10).split('-').reverse().join('-')
    
    return (

<div className={`w-full ${design?'bg-[#D9D9D9]':'bg-white'} flex justify-center sm:h-96`}>
       
        <div className={`w-[95%] lg:w-[75%] flex flex-col-reverse  ${design?'sm:flex-row':'sm:flex-row-reverse'} justify-between text-base lg:h-74 items-center gap-5 sm:gap-0 my-12 `}>
            <div className='w-[95%] lg:w-[50%] flex flex-col gap-2'>

               <h1 className='font-serif text-xl'>{title}</h1>

               <div className='flex flex-row gap-1'>
                 <p>Date:</p>
                 <p className='text-[#E3501F]'>{newDate}</p>
               </div>
               
               <div className='flex flex-row gap-1'>
                <p>Location:</p>
                <p className='text-[#E3501F]'>{location}</p>
               </div>
               
               <p className='text-[#787878] font-semibold'>{desc}</p>

               <ViewButton eventId={eventId} text='View Event' path='/Event'/>

            </div>
 
            <div className={`flex  ${design?'justify-center':'justify-start'} items-center w-full lg:w-[40%]`}>
            
                <img src={image} alt={eventId} className={`  object-cover ${design?'rounded-full aspect-square sm:h-72 sm:w-72':'rounded-lg aspect-[4/5] sm:h-72 sm:w-64'}`}/>

            </div>
        </div>
        </div>
    )
}