import { useState } from "react"
import {Link} from 'react-router-dom'

function Nav() {

const [isMenuOpen, setIsMenuOpen] = useState(true)

  return (
    <div className="w-full h-full z-50 relative">
      <header className="lg: flex z-50 justify-between items-center bg-white text-black py-6 px-2 lg:px-10 shadow-2xl h-20">
      {!isMenuOpen && (
        <div className={`absolute xl:hidden shadow-2xl top-20 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform`}>
        
        <Link to='/' onClick={()=>setIsMenuOpen(!isMenuOpen)} className="list-none w-142  text-center p-1  hover:bg-yellow-400 rounded-full pl-14 pr-14 pt-2 pb-2 mt-14
         transition-all cursor-pointer">Home</Link>

         <Link to='/#AboutUs' onClick={()=>setIsMenuOpen(!isMenuOpen)} className="list-none w-142  text-center p-1  hover:bg-yellow-400 rounded-full pl-14 pr-14 pt-2 pb-2 
         transition-all cursor-pointer">About Us</Link>

         <Link to='/OurWork' onClick={()=>setIsMenuOpen(!isMenuOpen)} className="list-none w-142  text-center p-1  hover:bg-yellow-400 rounded-full pl-14 pr-14 pt-2 pb-2 
         transition-all cursor-pointer">Our Work</Link>

         <Link to='/Donation' onClick={()=>setIsMenuOpen(!isMenuOpen)} className="list-none w-142  text-center p-1  hover:bg-yellow-400 rounded-full pl-14 pr-14 pt-2 pb-2 
         transition-all cursor-pointer">Donation</Link>

         <Link to='/ContactUs' onClick={()=>setIsMenuOpen(!isMenuOpen)} className="list-none w-142  text-center p-1  hover:bg-yellow-400 rounded-full pl-14 pr-14 pt-2 pb-2 mb-14
         transition-all cursor-pointer">Contact Us</Link>
      </div>
      )}



      {isMenuOpen ? (
        <button 
        aria-label='Open menu'
        className=' w-10 p-1 mr-0 xl:hidden '
         onClick={() => setIsMenuOpen(false)}>
          <svg 
          aria-hidden='true'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path d='M4 6h16M4 12h16M4 18h16'></path>
          </svg></button>
      ) : (
        <button
        aria-label='Close menu'
        className=' w-10 p-1 mr-0 xl:hidden  '
         onClick={() => setIsMenuOpen(true)}>
          <svg 
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path d='M6 18L18 6M6 6l12 12'></path>
          </svg>
        </button>
      )}
       
      
         
         <a href="/"><img src='https://res.cloudinary.com/dqxjfn0qw/image/upload/c_crop,w_1850,h_1100/v1741309125/1000018788_spgndy.png' alt="" className="w-20 hover:scale-105 transition-all"/></a>

         <ul className="hidden xl:flex items-center gap-12 font-semibold text-base ">
          <li className="p-1 cursor-pointer"><Link to='/'>Home</Link></li>
          <li className="p-1 cursor-pointer"><a href='#AboutUs'>About Us</a></li>
          <li className="p-1 cursor-pointer"><Link to='/OurWork'>Our Work</Link></li>
          <li className="p-1 cursor-pointer"><Link to='/Donation'>Donation</Link></li>
          <li className="p-1 cursor-pointer"><Link to='/ContactUs'>Contact Us</Link></li>
         </ul>
         <button className="w-28 h-9 bg-yellow-400 rounded-full text-xl font-semibold flex items-center justify-center">
            <Link to='/Donation'>Donate</Link>
          </button>
      </header>
    </div>
  )
} 

export default Nav
