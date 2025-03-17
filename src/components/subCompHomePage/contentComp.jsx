import React from "react";
import { Link } from "react-router-dom";
export default function ContentComp({ setShowRightSide }) {
  return (
    <div className="text-center lg:text-start flex flex-col w-full xl:gap-2 bg-white h-[35%] mb-4">
      <h2 className="text-3xl lg:text-4xl font-shippori text-purpleblack">
        About Us
      </h2>
      <p className="font-bold text-brickorange text-base lg:text-lg my-3">
        Compassion in Action, Change in Motion
      </p>
      <p className="text-graytext w-4/5 text-sm lg:text-smlg:text-justify font-poppins my-1 mx-auto md:mx-0 md:w-full">
        At Reach to Care Foundation Trust, we are committed to transforming
        lives through impactful initiatives in healthcare, education, and social
        welfare.
      </p>
      <Link to="/OurWork">
        <button className="hidden lg:inline bg-readmoregreen text-white w-[122px] h-[30px] rounded-full text-lg font-medium">
          Read More
        </button>
      </Link>
    </div>
  );
}
