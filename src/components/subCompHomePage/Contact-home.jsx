import React from "react";
import { Link } from "react-router-dom";

const ContactHome = () => {
  return (
    <div className="flex flex-col md:flex-row lg:gap-20 gap-8 p-4 justify-center items-center">
      <div className="flex  md:flex-row  border p-4 rounded-lg shadow-md w-full md:w-96 h-auto items-center">
        <img 
          src="https://res.cloudinary.com/dqxjfn0qw/image/upload/v1741030882/uapdhoebl8pmcnqpnpfr.jpg" 
          alt="Profile" className="w-24 h-24 rounded-lg object-cover ml-4" 
        />
        <div className="ml-4 flex-1 h-auto flex flex-col justify-between gap-2">
          <h2 className="text-lg font-shippori">Dr Rifaqat Ali</h2>
          <p className="text-sm font-poppins text-[#E3501F]">President</p>
          <p className="flex-grow">Guiding with purpose, I strive to turn compassion into lasting impact.</p>
          <Link
            onClick={(e) => {
              e.preventDefault();
              window.open("https://mail.google.com/mail/?view=cm&fs=1&to=rifaqat@gmail.com", "_blank");
            }}
            className="bg-[#034C5B] w-[40%] text-white font-poppins rounded-[40px] hover:bg-[#126e80] transition-all text-center cursor-pointer py-1"
          >
            Mail Me
          </Link>
        </div>
      </div>
      
      <div className="flex md:flex-row  border p-4 rounded-lg shadow-md w-full md:w-96 h-auto items-center">
        <div className=" flex-1 h-auto gap-2 flex flex-col justify-between order-2 lg:order-1 ml-4">
          <h2 className="text-lg font-shippori">Dr Mohammad Arif</h2>
          <p className="text-sm font-poppins text-[#E3501F]">General Secretary</p>
          <p className="flex-grow">Bridging vision with action, I ensure every step moves us forward.</p>
          <Link
            onClick={(e) => {
              e.preventDefault();
              window.open("https://mail.google.com/mail/?view=cm&fs=1&to=Arif@example.com", "_blank");
            }}
            className="bg-[#034C5B] w-[40%] text-white font-poppins rounded-[40px] hover:bg-[#126e80] transition-all text-center cursor-pointer py-1"
          >
            Mail Me
          </Link>
        </div>
        <img 
          src="https://res.cloudinary.com/dqxjfn0qw/image/upload/v1741031160/yt4obaeapoqpnan7xuci.jpg" 
          alt="Profile" className="w-24 h-24 rounded-lg object-cover order-1 lg:order-2 ml-4" 
        />
      </div>
    </div>
  );
};

export default ContactHome;
