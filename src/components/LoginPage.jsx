import {useState,useEffect} from 'react'
import axios from 'axios'

import Login from './subCompLoginPage/Login'




export default function LoginPage(){

    const [loginState,setLoginState]=useState(false)
    const [localToken,setLocalToken]=useState(localStorage.getItem('token') || '')

    const authFun=async ()=>{

        try{
            const authRes=await axios.get('https://rcfback.onrender.com/authentication',{
                headers:{
                    'Authorization':localToken,
                }
            })

            console.log(authRes)
            console.log(localToken)

            
            if(authRes.status===200){
                setLoginState(true)
                setLocalToken(localStorage.getItem('token'))
            }else(
                setLoginState(false)
            )
        }catch(err){
            console.log(err)
        }

    }

    useEffect(()=>{
        setLoginState(false)


        authFun();



    },[localToken])

    useEffect(()=>{

        const handleStorageChange=()=>{
            setLocalToken(localStorage.getItem('token'))
        }

        window.addEventListener('storage', handleStorageChange);

        return () => window.removeEventListener('storage', handleStorageChange);

    },[])




    

    return (

         <div>
            {loginState?<h1>Hello</h1>:<Login/>}
         </div>
    )
}