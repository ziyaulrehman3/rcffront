import React from 'react';
import TeamMember from './TeamMember';

const newteamMembers = [
  { 
    name: 'Mohammad Salman', 
    role: 'Joint Secretary', 
    description: 'Supporting every initiative, I help turn plans into progress.',
    imageUrl: 'https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740947808/Mohammad_Salman_1_u1njfi.jpg' 
  },
  { 
    name: 'Dr Adnan Shameem', 
    role: 'Treasurer', 
    description: 'Every contribution counts— I ensure it reaches those who need it most.',
    imageUrl: 'https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740947809/Dr_Adnan_Shameem_hxmffl.jpg' 
  },
  { 
    name: 'Dr Mohd Aquib', 
    role: 'Spokesperson', 
    description: 'A single voice can inspire many— let’s spread hope together.',
    imageUrl: 'https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740948522/Untitled_design__1_-removebg-preview_dn6t48.jpg' 
  },
];

const NewTeamSection = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center shrink-0 items-center mb-[10%]">
     
      <div className="flex flex-col md:flex-col lg:flex-row flex-nowrap gap-8 justify-center">
        {newteamMembers.map((member, index) => (
          <TeamMember 
            key={index} 
            name={member.name} 
            role={member.role} 
            description={member.description}
            imageUrl={member.imageUrl} 
          />
        ))}
      </div>
      </div>
  );
};
export default NewTeamSection;

