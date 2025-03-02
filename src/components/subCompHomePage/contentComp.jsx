import React from 'react';
export default function ContentComp({ setShowRightSide }) {
  return (
    <div className="About-us flex flex-col gap-4 lg:gap-0 mb-4 lg:mb-0 w-4/5 md:w-full items-center lg:items-baseline bg-white h-[35%]">
      <h2 className="text-3xl lg:text-4xl font-shippori text-purpleblack">About Us</h2>
      <p className="text-brickorange text-center lg:text-start text-lg lg:text-xl mt-2">
        Compassion in Action, Change in Motion
      </p>
      <p className="text-sm lg:text-xs text-center lg:text-start text-graytext font-poppins my-3">
        At Reach to Care Foundation Trust, we are committed to transforming lives through impactful initiatives in healthcare, education, and social welfare.
      </p>
      <button className="hidden lg:inline bg-readmoregreen text-white w-[142px] h-[40px] rounded-full text-lg font-medium my-4">
        Read More
      </button>
    </div>
  );
}
