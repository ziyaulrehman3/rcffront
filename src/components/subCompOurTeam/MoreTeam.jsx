import React from 'react';
import MoreTeamMember from './MoreTeamMember';


const teamMembers = [
  { 
    name: 'Fahad Ali', 
    imageUrl: 'https://res.cloudinary.com/dqxjfn0qw/image/upload/v1741469230/899048ab0cc455154006fdb9676964b3_pbj4gk.jpg' 
  },
  { 
    name: 'Hassan Khan', 
    imageUrl: 'https://res.cloudinary.com/dqxjfn0qw/image/upload/v1741469230/899048ab0cc455154006fdb9676964b3_pbj4gk.jpg' 
  },
  { 
    name: 'Adeel Ahmed', 
    imageUrl: 'https://res.cloudinary.com/dqxjfn0qw/image/upload/v1741469230/899048ab0cc455154006fdb9676964b3_pbj4gk.jpg' 
  },
];

const MoreTeam = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center shrink-0 items-center mb-[10%]">
      <div className="flex flex-col md:flex-col lg:flex-row flex-nowrap gap-8 justify-center">
        {teamMembers.map((member, index) => (
          <MoreTeamMember 
            key={index} 
            name={member.name}  
            imageUrl={member.imageUrl} 
          />
        ))}
      </div>
    </div>
  );
};

export default MoreTeam;
