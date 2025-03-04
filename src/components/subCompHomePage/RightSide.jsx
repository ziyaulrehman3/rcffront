import React from 'react';
import SmilingChild from './SmilingChild';
import Nurturing from './Nurturing';
import Hope from './Hope';

export default function RightSide() {
  return (
    <div className="flex flex-col items-start w-full lg:w-[54%] h-full lg:h-full gap-0">
      <SmilingChild />
      <Nurturing />
      <Hope />
    </div>
  );
}