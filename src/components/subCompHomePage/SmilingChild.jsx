import React from "react";
const SmilingChild = () => {
  return (
    <div id='AboutUs' className="relative w-full lg:flex justify-center items-center bottom-0 ">
      {/* Radial Blur Background */}
      <div
        className="absolute w-[250px] h-[350px] md:w-[400px] md:h-[500px] lg:w-[500px]  
                   rounded-full bg-[#FCD9C5]  blur-[90px] opacity-100
                   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      ></div>
      {/* Smiling Girl Image */}
      <img
        src="https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740470307/Intersect_yquqkd.png"
        alt="Smiling Girl"
        className="relative h-2/3 z-10 w-[320px] md:h-[300px] lg:w-auto object-cover mx-auto"
      />
    </div>
  );
};
export default SmilingChild;
