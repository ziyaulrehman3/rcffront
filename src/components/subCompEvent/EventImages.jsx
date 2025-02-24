import {useState,useEffect} from 'react'

export default function EventImages({images}){

    const [imgs,setImgs]=useState([])

    useEffect(()=>{

        if(Array.isArray(images)){
            setImgs(images)
        }

        console.log(imgs)



        },[images])


    return (
       
        <div className='flex w-[90%] lg:w-[80%] gap-5 md:gap-10 m-auto justify-between items-center flex-wrap'>

            {
                imgs.map((img)=>(

                    <img key={img} src={img} className='w-[100%] aspect-[4/5] md:w-60 md:h-72 object-cover rounded-lg' alt='Event Image'/>

                ))

                
                
            }
        </div>
    )
}