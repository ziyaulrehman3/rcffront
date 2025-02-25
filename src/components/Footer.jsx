import React from "react";
import { Link } from "react-router-dom";

const icons = [
    {
        icon: process.env.PUBLIC_URL + "images//icons//Vector.svg",
        alt: "facebook",
    },
    {
        icon: process.env.PUBLIC_URL + "images//icons//Vector (1).svg",
        alt: "instagram",
    },
    {
        icon: process.env.PUBLIC_URL + "images//icons//Vector.png",
        alt: "mail",
      },
      {
        icon: process.env.PUBLIC_URL + "images//icons//Vector (2).svg",
        alt: "linkedIn",
    },
];

const Footer = () => {
  return (
    <div className="bg-black mt-28 gap-8 text-white flex flex-col justify-between p-10">
      <div className="flex flex-col sm:flex-row justify-evenly gap-1">
        <div className="flex flex-col gap-1">
          <h2>About Us</h2>
          <Link className="text-[10px] hidden sm:block  tracking-widest hover:underline cursor-pointer">
            Our Story
          </Link>
          <Link className="text-[10px] hidden sm:block tracking-widest hover:underline cursor-pointer">
            Our Team
          </Link>
          <Link className="text-[10px] hidden sm:block tracking-widest hover:underline cursor-pointer">
            Mission and Vision
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <h2>Legal Policies</h2>
          <Link className="text-[10px] hidden sm:block tracking-widest hover:underline cursor-pointer">
            Terms & Conditions
          </Link>
          <Link className="text-[10px] hidden sm:block tracking-widest hover:underline cursor-pointer">
            Privacy Policies
          </Link>
          <Link className="text-[10px] hidden sm:block tracking-widest hover:underline cursor-pointer">
            Refund & Cancellation Policies
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <h2>Our Work</h2>
          <Link className="text-[10px] hidden sm:block tracking-widest hover:underline cursor-pointer">
            Our Work
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <h2>Support Us</h2>
          <Link className="text-[10px] hidden sm:block tracking-widest hover:underline cursor-pointer">
            Donation
          </Link>
        </div>
      </div>
      <hr />
      <div className="flex justify-center gap-8">
        {icons.map((icon, index) => (
          <img
            src={icon.icon}
            alt={icon.alt}
            key={index}
            className="w-5 h-5 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};
export default Footer;
