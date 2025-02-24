import {useEffect,useState} from 'react'

export default function EventContent({story}){

    const [storys,setStorys]=useState([])

    useEffect(()=>{

        if(story){
            setStorys(story)
        }
        
    },[story])

    
    return (

        <div className='w-[90%] lg:w-[80%] m-auto '>
            <div className='flex flex-col gap-2'>
                <h1 className='font-shippori font-bold text-xl '>About the Event:</h1>

                <div>

                     {
                         storys.map((st)=>(
                             <p className='font-poppins font-lg text-[#787878] w-full lg:w-[70%] text-justify'>{st}</p>
                         ))
                     }

                </div>


                <p></p>
            </div>
        </div>
    )
}