import React from 'react';
import { Link } from 'react-router-dom';

export default function Hope() {
  return (
    <div className="w-full  rounded-none md:rounded-[5px] overflow-hidden relative h-[30%]">
      {/* Image */}
      <div className="w-full h-full">
        <img
          src="https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740470316/boy2_qeq4up.jpg"
          alt="Bringing Hope"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-overorange bg-opacity-65 flex flex-col items-start justify-center  gap-1 sm:gap-4 lg:gap-0 p-4 sm:p-5 text-white">
        <h3 className="text-lg sm:text-xl font-shippori font-medium leading-tight">
          Bringing Hope in Times of Crisis
        </h3>
        <p className="mt-2 sm:my-3 text-sm tracking-[0.05em] leading-[1.3em]">
          We stand with communities affected by disaster, providing urgent
          relief and long-term support.
        </p>
        <Link to="/aboutus">
          <button className="px-4 sm:px-5 py-1.5 sm:py-2 text-xs tracking-[0.05em] border-2 text-white border-strokeyellow rounded-full">
            Join Us
          </button>
        </Link>
      </div>
    </div>
  );
}