import React from 'react';
import { Link } from "react-router-dom";

const DonateSection = () => {
  return (
    <div className="text-center my-[6%] w-[80%] m-auto ">
      <p className="text-lg text-[#787878] font-poppins mb-8">
        Your generosity fuels our mission to help those in need. Join us in making a lasting impact by donating today.
      </p>
      <Link to="/Donation"  className="bg-[#034C5B] text-white font-poppins px-6 py-4 rounded-[40px] hover:bg-[#126e80] transition-all">
        Donate Now
      </Link>
    </div>
  );
};

export default DonateSection;