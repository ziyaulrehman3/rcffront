import {useEffect,useState} from 'react'
import axios from 'axios'

import MainImgComp from './subCompOurWork/MainImgComp'
import Thoughts from './subCompOurWork/Thoughts'
import WorkLabel from './subCompOurWork/WorkLabel'
import EventCart from './subCompOurWork/EventCart'
import DonationMsg from './subCompOurWork/DonationMsg'

export default function OurWork(){

     const [events,setEvents]=useState([])
    
    // let events=[];


    useEffect(()=>{

        const fetchEvent=async ()=>{

            try{
                let apiResponse=await axios.get('/getAllEvents')

                apiResponse=await apiResponse.data.map((set)=>({
                    _id:set._id,
                    eventName:set.eventName,
                    sDate:set.sDate,
                    location:set.location,
                    shortDescription:set.shortDescription,
                    image:set.images[0],
                }))
         
                setEvents(apiResponse);
                


            }catch(err){
                console.log(err)
            }

        }

      fetchEvent();

    },[]);

    return(
        <div className='flex flex-col'>
           <MainImgComp/>

           <div className='flex flex-col lg:flex-row font-sans'>
              <Thoughts heading='Women & Child Welfare' img='https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740260170/img1_fdkvoz.png' filter='bg-[#093C48]' text='Promoting gender equality, women empowerment, and child welfare through support programs and awareness drives.'/>
              <Thoughts heading='Women & Child Welfare' img='https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740260170/img2_cobabi.png' filter='bg-[#61A047]' text='Promoting gender equality, women empowerment, and child welfare through support programs and awareness drives.'/>
              <Thoughts heading='Women & Child Welfare' img='https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740260170/img3_lgddqy.png' filter='bg-[#F29E22]' text='Promoting gender equality, women empowerment, and child welfare through support programs and awareness drives.'/>              
           </div>

           <WorkLabel/>

           <div className='w-full flex flex-col justify-center items-center gap-2'>

               {
                
                

                events.map((event,index)=>(
                    

                    <EventCart eventId={event._id} design={(index%2)?true:false} image={event.image} title={event.eventName} date={event.sDate} location={event.location} desc={event.shortDescription}/>
                ))
               }

           </div>

           <DonationMsg/>

           

           

   




        </div>
    )
}

