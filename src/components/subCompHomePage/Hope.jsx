import React from 'react';
import { Link } from 'react-router-dom';
export default function Hope() {
  return (
    <div className="Hope block w-full rounded-b overflow-hidden relative h-full">
      {/* Image */}
      <div className="w-full h-full">
        <img
          src="https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740470316/boy2_qeq4up.jpg"
          alt="Bringing Hope"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-overorange bg-opacity-65 flex flex-col items-start p-4 sm:p-6 justify-center text-white ">
        <h3 className="text-lg sm:text-xl font-shippori font-medium leading-tight">
          Bringing Hope in Times of Crisis
        </h3>
        <p className="mt-3 sm:mt-5 font-poppins text-xs sm:text-sm tracking-[0.05em] leading-[1.4em]">
          We stand with communities affected by disaster, providing urgent
          relief and long-term support.
        </p>
        <Link to={"/aboutus"} className="mt-3  px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm tracking-[0.05em] border-2 text-white border-strokeyellow rounded-full">
          Join Us
        </Link>
      </div>
    </div>
  );
}



