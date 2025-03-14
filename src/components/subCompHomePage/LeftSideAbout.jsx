import React from "react";
import ContentComp from "./contentComp";
import ImgComp from "./ImgComp";

export default function LeftSideAbout() {
  return (
    <div className="flex flex-col w-full lg:w-[45%] h-full lg:h-full gap-0">
      <ContentComp />
      <ImgComp />
      <button className="inline lg:hidden my-10 z-50 mx-auto bg-readmoregreen text-white w-[122px] h-[30px] rounded-full text-lg font-medium">
        Read More
      </button>
    </div>
  );
}
