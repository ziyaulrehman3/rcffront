import {useState,useEffect} from 'react'

export default function EventDetails({details}){

    const [sDate,setSDate]=useState([])
    const [eDate,setEDate]=useState([])
    const [location,setLocation]=useState([])
    const [members,setMembers]=useState([])

    useEffect(()=>{

        const months={
            1:'January',
            2:'Febuary',
            3:'March',
            4:'April',  
            5:'May',    
            6:'June',
            7:'July',
            8:'August',
            9:'September',
            10:'October',
            11:'November',
            12:'December',
        }
        if(details){
            setSDate(String(details[0]).slice(8,10) + ' ' + months[String(details[0]).slice(5,7)] + ' ' + String(details[0]).slice(0,4))
            setEDate(String(details[0]).slice(8,10) + ' ' + months[String(details[0]).slice(5,7)] + ' ' + String(details[0]).slice(0,4))
            setLocation(details[3])
            
            let temp=details[2];
            if(temp){
                setMembers(temp.join(' , '))
            }
            


        }
    },[details])

    return (
        <div className='flex flex-col w-[90%] lg:w-[80%] m-auto gap-2 md:gap-0'>
            <div className='flex flex-col gap-2 md:gap-0 md:flex-row w-[80%] justify-between w-[70%]'>
                 <div className='flex flex-col gap-3'>
                     <span className='flex gap-2'>
                         <p className='text-[#E3501F]'>Event Date:</p>
                         <p className='text-[#787878]'>{sDate}</p>
                     </span>
     
                     <span className='flex gap-2'>
                         <p className='text-[#E3501F]'>Location:</p>
                         <p className='text-[#787878]'>{location}</p>
                     </span>
                 </div>

                 <div className='flex flex-col gap-1'>

                      <p className='text-[#E3501F] '>Event Duration:</p>
                      
                      <p className='text-[#787878]'>{'From: ' + sDate}</p>
                      <p className='text-[#787878]'>{'To: ' + eDate}</p>
                 
                 </div>
            </div>
      

            <div>
                <p className='text-[#E3501F]'>Team Members Involved:</p>
                <p className='text-[#787878]'>{members}</p>
            </div>

        </div>
        
    )
}