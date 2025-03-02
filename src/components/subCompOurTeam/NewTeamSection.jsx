import React from 'react';
import TeamMember from './TeamMember';

const newteamMembers = [
  { 
    name: 'Mohammad Salman', 
    role: 'Joint Secretary', 
    description: 'Supporting every initiative, I help turn plans into progress.',
    imageUrl: 'https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740383308/Mohammad_Salman_futg9y.jpg' 
  },
  { 
    name: 'Dr Adnan Shameem', 
    role: 'Treasurer', 
    description: 'Every contribution counts— I ensure it reaches those who need it most.',
    imageUrl: 'https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740381963/Dr_Adnan_Shameem_ec4iyv.png' 
  },
  { 
    name: 'Dr Mohd Aquib', 
    role: 'Spokesperson', 
    description: 'A single voice can inspire many— let’s spread hope together.',
    imageUrl: 'https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740506028/Untitled_design__1_-removebg-preview_dn6t48.png' 
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
