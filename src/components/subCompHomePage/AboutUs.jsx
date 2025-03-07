import React from "react";
import LeftSideAbout from "./LeftSideAbout";
import RightSide from "./RightSide";

export default function AboutUs() {
  return (
    <div id="AboutUs" className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[100%] md:max-w-[60%] h-auto lg:h-[750px] gap-0 m-auto mt-24">
      <LeftSideAbout />
      <RightSide />
    </div>
  );
}