import React from "react";
import { Link } from "react-router-dom";
export default function ImgComp() {
  return (
    <div className=" w-[90%] lg:w-full  h-[65%] flex flex-col relative ">
      {/* Image Component */}
      <img
        className="h-full w-full  object-cover rounded-lg aspect-square lg:aspect-auto"
        src="https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740470337/boy_bemvau.jpg"
        alt="Boy"
      />
      {/* Gradient Overlay */}
      <div
        className="h-full w-full absolute top-0 rounded-[5px] opacity-100"
        style={{
          background:
            "linear-gradient(to bottom, rgba(21, 144, 174,0.6) 0%, rgba(9, 60, 72,0.5) 100%)",
        }}
      ></div>
      <div className=" flex flex-col gap-2 absolute top-0 items-start justify-end text-white h-[90%] w-full pl-4 ">
        <h3 className="text-2xl lg:text-[26px] font-regular lg:text-2xl font-shippori">
          Helping Hands, Changing Lives
        </h3>
        <p className="text-[15px] font-poppins md:text-base md:mt-6 tracking-[0.09em] leading-[1.44em]">
          Our mission is to uplift underprivileged communities through
          humanitarian aid, <span className="inline md:hidden">Read more...</span>
          <span className="hidden md:inline">skill development, and social welfare initiatives.</span>
        </p>
        {/* Join Us Button */}
        <Link
          to={"/aboutus"}
          className="tracking-normal mt-4 md:mt-8 px-6 py-2 lg:tracking-[0.05em] font-medium text-white border-2 border-strokeyellow rounded-full"
        >
          Join Us
        </Link>
      </div>
    </div>
  );
}
