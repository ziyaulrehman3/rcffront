import React from 'react';
import ContentComp from './contentComp'
import ImgComp from './ImgComp'

export default function LeftSideAbout() {
  return (
    <div className="flex flex-col w-full items-center lg:w-2/5 h-[650px]  gap-0">
        <ContentComp />
        <ImgComp />
        <button className="inline lg:hidden bg-readmoregreen text-white w-[180px] h-[60px] rounded-full text-lg font-medium my-4">
          Read More
        </button>
    </div>
  );
}