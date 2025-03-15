import {useEffect,useState} from 'react'
import axios from 'axios'

import EventName from './subCompEvent/EventName'
import EventContent from './subCompEvent/EventContent'
import EventDetails from './subCompEvent/EventDetails'
import EventImages from './subCompEvent/EventImages'
import EstimateContainer from './subCompEvent/EstimateContainer'
import ThankingMsg from './subCompEvent/ThankingMsg'
import ThankingPersons from './subCompEvent/ThankingPersons'

export default function Event(){

    const [event,setEvent]=useState('');

   

    useEffect(()=>{

        const eventDetails=async ()=>{

            try{
                const eventId=await localStorage.getItem('id');
                const apiRes=await axios.get('https://rcfback.onrender.com/getEvent/' + String(eventId))
                setEvent(apiRes.data)


             

            
            }catch(err){
                console.log(err)
            }
            

        }


        eventDetails();

        
    },[])


    return (
        <div className='flex flex-col gap-10 py-12'>
            <EventName name={event.eventName}/>

            <img className='w-[90%] flex items-center justify-center m-auto h-56 lg:h-96 object-cover rounded-lg' src={event.imageMain??'images/img.png'} alt='Main Img'/>
 
             <div className='bg-gray-100 flex flex-col gap-10 pt-12 justify-center'>
                 <EventContent story={event.story}/>

                 <EventDetails details={[event.sDate,event.eDate,event.members,event.location,event._id]}/>

                 <EventImages images={event.images}/>

                 <EstimateContainer estimated={event.estimated}/>

                 <ThankingMsg/>

             </div>

             <ThankingPersons personsData={event.thankingPerson}/>
            
        </div>
    )
}