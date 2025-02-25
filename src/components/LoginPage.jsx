import {useState} from 'react'

import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";



export default function LoginPage(){

    const [password,setPassword]=useState()
    const [username,setUsername]=useState()

    const passwordChange=(e)=>{
        setPassword(e.target.value)
        console.log(password)
    }

    const usernameChange=(e)=>{
        setUsername(e.target.value)
        console.log(username)
    }

    return (
        <div className='bg-[#D9D9D9] py-5'>
            <div className='w-[80%] md:w-[35%] aspect-square md:aspect-[3/2] bg-white flex flex-col items-center m-auto rounded-2xl gap-5 justify-between py-5'>
                <h1 className='font-poppins text-4xl font-bold '>Login</h1>

                <div className='w-[80%] relative'>

                   <p className='text-md'>Username:</p>
                   <FaRegUserCircle className='absolute left-0.5 bottom-1'/>


                   <input onChange={usernameChange} className='focus:outline-none w-full pl-5' placeholder='Type your password' type='text' name='username'/>
                   <hr/>

                </div>
                
                <div className='w-[80%] relative'>
                   <p className='text-md'>Password:</p>
                   <RiLockPasswordLine className='absolute left-0.5 bottom-1'/>

                   <input onChange={passwordChange} className="focus:outline-none pl-5" placeholder='Type your password' type='password' name='password'/>
                   <hr/>
                </div>

                <button className='bg-[#034C5B] text-white w-[80%] h-10 rounded-3xl font-semibold'>LOGIN</button>

            </div>
        </div>
    )
}