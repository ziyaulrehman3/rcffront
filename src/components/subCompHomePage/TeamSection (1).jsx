import React from 'react';
import TeamMember from './TeamMember';

const teamMembers = [
  { 
    name: 'Dr Rifaqat Ali', 
    role: 'President', 
    description: 'Guiding with purpose, I strive to turn compassion into lasting impact.',
    imageUrl: 'https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740381964/660_d1y8c4.jpg' 
  },
  { 
    name: 'Dr Mohammad Arif', 
    role: 'General Secretary', 
    description: 'Bridging vision with action, I ensure every step moves us forward.',
    imageUrl: 'https://res.cloudinary.com/dqxjfn0qw/image/upload/t_potrait/v1740381963/Dr_Mohd_Arif_g0c2c9.jpg' 
  },
  { 
    name: 'Dr Mohammad Hamid', 
    role: 'Vice President', 
    description: 'Together, we can transform small efforts into powerful change.',
    imageUrl: 'https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740947809/Dr_mohd_Hamid_1_zzyink.jpg'
  },
];

const TeamSection = () => {
  return (
     <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center shrink-0 items-center ">
      <div className="flex flex-col lg:flex-row flex-wrap gap-8 shrink-0 items-center justify-center ">
        {teamMembers.map((member, index) => (
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
export default TeamSection;
