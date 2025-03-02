import React from 'react';
import { Link } from 'react-router-dom';
export default function Nurturing() {
  return (
    <div className="block w-full overflow-hidden relative h-full">
      {/* Image */}
      <div className="w-full h-full relative">
        <img
          src="https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740470325/forest_yqtdlb.jpg"
          alt="Nurturing Nature"
          className="w-full h-full object-cover md:object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-forest bg-opacity-70 flex flex-col items-start justify-center p-4 sm:p-3 gap-0 text-white">
        <h3 className="text-lg sm:text-xl font-shippori font-medium leading-tight">
          Nurturing Nature, Sustaining the Future
        </h3>
        <p className="mt-1 font-poppins sm:mt-5 text-xs sm:text-sm tracking-[0.05em] leading-[1.4em]">
          Our mission is to uplift underprivileged communities through
          humanitarian aid, skill development, and social welfare initiatives.
        </p>
        <Link to={"/aboutus"} className="mt-2  px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm tracking-[0.05em] border-2 text-white border-strokeyellow rounded-full">
          Join Us
        </Link>
      </div>
    </div>
  );
}