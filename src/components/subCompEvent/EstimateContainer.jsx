import {useState,useEffect} from 'react'

export default function EstimateContainer({estimated}){

    const [esti,setEsti]=useState([])

    useEffect(()=>{

        if(estimated){
            setEsti(estimated)
        }

    },[estimated])



    return (

        <div className='flex flex-col md:flex-row w-[90%] lg:w-[80%] m-auto justify-between gap-5'>
            <div className='flex flex-col gap-3'>
               <h1 className='font-semibold text-lg font-shippori'>Estimated Cost of Event:</h1>

               {
                  esti.map((value)=>(
                    <div className='flex gap-1'>
                        <p className='text-[#E3501F]'>{value.estimatedPoint + ":"}</p>
                        <p className='text-[#787878]'>{value.estimatedValue}</p>
                    </div>
                  ))
               }

            </div>

            <div className='flex flex-col gap-2 items-center'>

                <img className='h-52 w-52 lg:w-36 lg:h-36 rounded-lg' src='images/qrcode.png' alt='Payment QR Code'/>
                <p className='font-semibold'>Scan QR to Donate</p>

            </div>
        </div>
    )
}