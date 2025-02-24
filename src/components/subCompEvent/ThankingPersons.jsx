import {useState,useEffect} from 'react'

export default function ThankingPersons({personsData}){

    const [persons,setPersons]=useState([])

    useEffect(()=>{
        
        if(personsData){
            setPersons(personsData)
        }
    },[personsData])

    return (

        <div className='flex flex-wrap gap-5 justify-center md:justify-between w-[90%] lg:w-[80%] m-auto'>
             {
                persons.map((person)=>(
                    <div className='flex flex-col justify-center items-center'>
                        <img className='rounded-full w-24 h-24' src={person.image} alt={person.name}/>
                        <p className='font-medium text-[#787878]'>{person.name}</p>
                    </div>
                ))
             }
        </div>
    )
}