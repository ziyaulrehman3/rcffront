import {useState,useEffect} from 'react'
import axios from 'axios'

import ImgFrame from './ImgFrame'
import {DonationMsgFrame1,DonationMsgFrame2,DonationMsgFrame3} from './DonationMsgFrame'

export default function GalleryFrame(){

    const [images,setImages]=useState([])

    useEffect(()=>{

        async function apiCall(){

            try{

                const apiResponse=await axios.get('https://rcfback.onrender.com/getAllEvents')
                const data=await apiResponse.data.flatMap(item=>item.images)
                setImages(data)
                console.log(data)
    
    
            }catch(err){
                console.log(err)
            }

        }

        apiCall();

        


     
    },[])

    function getMsg(){
        switch(Math.floor(Math.random()*3)){
            case 0:
                return <DonationMsgFrame1/>

            case 1:
                return <DonationMsgFrame2/>

            case 2:
                return <DonationMsgFrame3/>
        }
    }

    return (
        <div className='w-full lg:px-[25%] py-16 bg-[#D9D9D9] flex flex-wrap'>

        {
            images.map((image)=>(
                <>
                   <ImgFrame image={image}/>
                   
                    {getMsg()}
                    
                </>
                
            ))
        }
            


        </div>
    )
}