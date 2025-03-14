
import React from 'react';

const MoreTeamMember = ({ name, imageUrl }) => {
  return (
    <div className="bg-white rounded-[5px] lg:w-[380px] lg:h-[482px]  md:w-[330px] md:h-[432px] w-[330px] h-[432px] relative flex flex-col justify-center">
      <img alt={`Portrait of ${name}`} className="w-full h-full object-cover" src={imageUrl} />
      <div className="absolute left-1/2 bottom-10 w-[76%] h-auto  bg-white p-4 text-left transform -translate-x-1/2">
        <h2 className="text-lg  font-shippori font-bold text-black">{name}</h2>
      </div>
    </div>
  );
};

export default MoreTeamMember;
