import React from "react";

const SmilingChild = () => {
  return (
    <div className="relative w-full h-[40%] flex justify-center items-center">
      {/* Radial Blur Background */}
      <div
        className="absolute w-[220px] h-[300px] md:w-[280px] md:h-[350px] lg:w-[320px] lg:h-[380px] 
                   rounded-full bg-[#FCD9C5] blur-[80px] opacity-100
                   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      ></div>

      {/* Smiling Girl Image */}
      <img
        src="https://res.cloudinary.com/dqxjfn0qw/image/upload/t_child/v1740470307/Intersect_yquqkd.png"
        alt="Smiling Girl"
        className=" z-10 w-[280px] md:w-[320px] lg:w-auto max-h-[300px] object-contain mx-auto"
      />
    </div>
  );
};

export default SmilingChild;