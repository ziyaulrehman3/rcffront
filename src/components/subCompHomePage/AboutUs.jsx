import React from "react";
import LeftSideAbout from "./LeftSideAbout";
import RightSide from "./RightSide";

export default function AboutUs() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[90%] md:max-w-[55%] h-auto lg:h-[750px] gap-0 m-auto mt-24">
      <LeftSideAbout />
      <RightSide />
    </div>
  );
}