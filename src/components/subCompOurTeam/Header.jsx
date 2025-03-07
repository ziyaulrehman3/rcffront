import React from 'react';

const Header = () => {
  return (
    <div className="text-center my-[5%] w-full ">
      <h2 className="text-xl font-shippori  tracking-[0.05em]">Meet Our Team</h2>
      <p className="text-[#E3501F] text-xl font-poppins font-normal mt-2 mb-3 lg:mb-0 py-2 px-2">Passionate Minds, United for a Cause</p>
      <p className="text-[#9CA3AF]  gap-0 font-poppins w-[85%] h-[85px] mx-auto flex items-center justify-center text-base lg:w-2/3 ">
        Our dedicated team works tirelessly to create a positive impact on society. Each member brings unique skills, commitment, and a shared vision to drive meaningful change.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 "></div>
    </div>
  );
};

export default Header;