import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[20%] bg-white text-black mix-h-screen shadow-xl">
      <ul className="text-sm lg:text-lg text-poppins text-[#787878] ">

        <li className="mb-8 mt-8 ">
          <button onClick={()=>localStorage.setItem('selected','addevent')} className="block py-6 w-full hover:bg-[#253E52] hover:text-white font-semibold">
          Add Event
          </button>
        </li>

        <li >
          <button onClick={()=>localStorage.setItem('selected','updateevent')} className="mb-8 block py-6 w-full hover:bg-[#253E52] hover:text-white font-semibold" >
          Update Event
          </button>
        </li>

        <li>
          <button onClick={()=>localStorage.setItem('selected','updateslideshow')} className="mb-8 block py-6 w-full hover:bg-[#253E52] hover:text-white font-semibold">
          Update Slideshow
          </button>
        </li>

        <li >
          <button onClick={()=>localStorage.setItem('selected','addimage')} className="mb-8 block py-6 w-full hover:bg-[#253E52] hover:text-white font-semibold" >
          Add Images
          </button>
        </li>

        <li >
          <button onClick={()=>localStorage.setItem('selected','addthankingperson')} className="mb-8 block py-6 w-full hover:bg-[#253E52] hover:text-white font-semibold" >
          Add Thanking Person
          </button>
        </li>

        <li >
          <button onClick={()=>localStorage.setItem('selected','addmainimg')} className="mb-8 block py-6 w-full hover:bg-[#253E52] hover:text-white font-semibold" >
          Add Main Img
          </button>
        </li>

        <li className='mx-auto'>
        <a href='' >
          <button onClick={()=>localStorage.setItem('token','')} className="mb-8 block py-6 w-full hover:bg-[#253E52] hover:text-white font-semibold">
          
          Log Out
          
          </button>
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
