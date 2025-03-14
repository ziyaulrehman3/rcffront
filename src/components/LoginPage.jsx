import { useState, useEffect } from 'react'
import axios from 'axios'

import AdminPortal from './subCompLoginPage/AdminPortal'

import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";


export default function LoginPage() {
    const [loginState, setLoginState] = useState(false)
    const [localToken, setLocalToken] = useState(localStorage.getItem('token'))


    const [user,setUser]=useState({})

    const handelChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    
    async function getAuth(){

        
        try{
            const response = await axios.post('https://rcfback.onrender.com/login',user,{
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })

            localStorage.setItem('token',response.data)
            setLoginState(true)

        }catch(err){
            console.log(err);
            setLoginState(false)
            alert("Wrong Credential")
        }

    } 

    // const authFun = async () => {
    //     try {
    //         // if (!localToken) {
    //         //     setLoginState(false)
    //         //     return
    //         // }

    //         const authRes = await axios.get('https://rcfback.onrender.com/authentication', {
    //             headers: {
    //                 'Authorization': localToken,
    //             }
    //         })
            
    //         console.log('ziya:' + authRes)

    //         if (authRes.status === 200) {
    //             setLoginState(true)
    //         } else {
    //             setLoginState(false)
    //         }

    //     } catch (err) {
    //         console.log(err)
    //         setLoginState(false)
    //     }
    // }

    // useEffect(() => {

    //     authFun()

    // }, [localStorage.getItem('token')]) // 🔥 This Line Will Work


    return (
        <div>
            {loginState ?<AdminPortal/> : <div className='bg-[#D9D9D9] py-5'>
            <div className='w-[80%] md:w-[35%] aspect-square md:aspect-[3/2] bg-white flex flex-col items-center m-auto rounded-2xl gap-5 justify-between py-5'>
                <h1 className='font-poppins text-4xl font-bold '>Login</h1>

                <div className='w-[80%] relative'>

                   <p className='text-md'>Username:</p>
                   <FaRegUserCircle className='absolute left-0.5 bottom-1'/>

                   <input onChange={handelChange} className='focus:outline-none w-full pl-5' placeholder='Type your password' type='text' name='username' value={user.username}/>
                   <hr/>

                </div>
                
                <div className='w-[80%] relative'>
                   <p className='text-md'>Password:</p>
                   <RiLockPasswordLine className='absolute left-0.5 bottom-1'/>

                   <input onChange={handelChange} className="focus:outline-none pl-5" placeholder='Type your password' type='password' name='password' value={user.password}/>
                   <hr/>
                </div>

                <button onClick={getAuth} className='bg-[#034C5B] text-white w-[80%] h-10 rounded-3xl font-semibold'>LOGIN</button>

            </div>
        </div>}
        </div>
    )
}
