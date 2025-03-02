import React from 'react';

const Header = () => {
  return (
    <div className="text-center my-[5%] w-full">
      <h2 className="text-4xl font-shippori font-semibold tracking-[0.05em]">Meet Our Team</h2>
      <p className="text-[#E3501F] text-xl font-poppins font-semibold mt-2 pt-4 pb-4">Passionate Minds, United for a Cause</p>
      <p className="text-[#787878] lg:text-xl gap-0 font-poppins max-w-[1000px] h-[90px] mx-auto flex items-center justify-center text-center w-11/12">
        Our dedicated team works tirelessly to create a positive impact on society. Each member brings unique skills, commitment, and a shared vision to drive meaningful change.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 "></div>
    </div>
  );
};

export default Header;
