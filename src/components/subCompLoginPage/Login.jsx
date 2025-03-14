// import {useState} from 'react'
// import axios from 'axios'

// import { RiLockPasswordLine } from "react-icons/ri";
// import { FaRegUserCircle } from "react-icons/fa";



// export default function Login(){

//     const [user,setUser]=useState({})

//     const handelChange=(e)=>{
//         setUser({...user,[e.target.name]:e.target.value})
//     }

    

//     async function getAuth(){

        
//         try{
//             const response = await axios.post('https://rcfback.onrender.com/login',user,{
//                 headers:{
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                 }
//             })

//             localStorage.setItem('token',response.data)

//         }catch(err){
//             console.log(err);
//         }

//     } 

    

//     return (

//     )
// }