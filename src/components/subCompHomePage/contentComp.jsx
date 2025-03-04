import React from 'react';
export default function ContentComp({ setShowRightSide }) {
  return (
    <div className="text-center lg:text-start flex flex-col w-full  bg-white h-[35%]">
      <h2 className="text-3xl lg:text-4xl font-shippori text-purpleblack">About Us</h2>
      <p className="font-bold text-brickorange text-base lg:text-lg my-3">
        Compassion in Action, Change in Motion
      </p>
      <p className="text-sm lg:text-sm text-graytext font-poppins my-1">
        At Reach to Care Foundation Trust, we are committed to transforming lives through impactful initiatives in healthcare, education, and social welfare.
      </p>
      <button className="hidden lg:inline bg-readmoregreen text-white w-[142px] h-[40px] rounded-full text-lg font-medium">
        Read More
      </button>
    </div>
  );
}