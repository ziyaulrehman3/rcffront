import {Link} from 'react-router-dom'

export default function({text,path,eventId}){

    const idSetLocalStorage=(value)=>{
        localStorage.setItem('id',value)
    }

    
    return (

       <Link onClick={()=>idSetLocalStorage(eventId)} to={path} className='text-white bg-[#034C5B] mt-3 rounded-full px-2 max-w-32 h-9 flex justify-center items-center'>{text}</Link>
    )
}