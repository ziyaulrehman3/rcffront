import React,{useState,useEffect} from 'react'
import SideBar from './SideBar'
import EventForm from './EventForm'
import UpdateEvent from './UpdateEvent'
import AdminNav from './AdminNav'
import NewFile from './NewFIle'
import AddThankingPerson from './AddThankingPerson'
import Addimage from './Addimage'

export const AdminPortal = () => {

  const [selected,setSelected]=useState(localStorage.getItem('selected'))

  useEffect(()=>{
    const handleStorageChange = () => {
      setSelected(localStorage.getItem('selected'));
    }

    const handleLocalChange = () => {
      setSelected(localStorage.getItem('selected'));
    }

    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function(key, value) {
      originalSetItem.apply(this, arguments);
      if(key === 'selected') {
        handleLocalChange();
      }
    };

    window.addEventListener('storage', handleStorageChange);

 
  },[])



  return (
    <div>
        <div className='flex flex-row overflow-hidden'>

        <SideBar/>



          {
            (selected==='addevent')?<EventForm/>:((selected==='updateevent')?<UpdateEvent/>:(selected==='updateslideshow')?<NewFile/>:(selected==='addimage')?<Addimage/>:<AddThankingPerson/>)
          }

        
        </div>
    </div>
  )
}
export default AdminPortal;