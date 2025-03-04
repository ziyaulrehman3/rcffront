
import React from 'react';

const TeamMember = ({ name, role, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-[5px] lg:w-[380px] lg:h-[482px]  md:w-[330px] md:h-[432px] w-[330px] h-[432px] relative flex flex-col justify-center">
      <img alt={`Portrait of ${name}`} className="w-full h-full object-cover" src={imageUrl} />
      <div className="absolute left-1/2 bottom-10 w-[76%] h-[170px] bg-white p-4 text-left transform -translate-x-1/2">
        <h2 className="text-lg  font-shippori font-bold text-black">{name}</h2>
        <p className="text-orange-500 font-poppins font-semibold mt-1">{role}</p>
        <p className="text-[#787878] font-poppins mt-2 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;

