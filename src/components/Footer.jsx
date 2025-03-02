import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
// If you're already using @iconify/react in your project:

const Footer = () => {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isLegalPolicyOpen, setIsLegalPolicyOpen] = useState(false);
  const [isOurWorkOpen, setIsOurWorkOpen] = useState(false);
  const [isSupportUsOpen, setIsSupportUsOpen] = useState(false);

  return (
    <div className="bg-black gap-8 text-white flex flex-col justify-between p-10">
      <div className="flex flex-col sm:flex-row justify-evenly gap-1">
        {/* About Us */}
        <div className="section-header flex flex-col gap-2">
          <h2
            onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
            className="text flex items-center justify-between cursor-pointer sm:cursor-default"
          >
            <span className="text-lg font-semibold -tracking-tighter">
              About Us
            </span>
            <Icon
              icon={isAboutUsOpen ? "bx:chevron-up" : "bx:chevron-down"}
              className="ml-2 w-4 h-4 sm:hidden"
            />
          </h2>
          {/* Links for large screens */}
          <div className="hidden sm:block">
            <Link to="/OurStory" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
              Our Story
            </Link>
            <Link  to="/OurTeam" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
              Our Team
            </Link>
            <Link  to="/Mission" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
              Mission and Vision
            </Link>
          </div>
          {/* Toggle for small screens */}
          <div className="sm:hidden">
            {isAboutUsOpen && (
              <>
                <Link to="/OurStory" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
                  Our Story
                </Link>
                <Link  to="/OurTeam" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
                  Our Team
                </Link>
                <Link to="/Mission" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
                  Mission and Vision
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Legal Policies */}
        <div className="section-header flex flex-col gap-2">
          <h2
            onClick={() => setIsLegalPolicyOpen(!isLegalPolicyOpen)}
            className="flex items-center justify-between cursor-pointer sm:cursor-default"
          >
            <span className="text-lg font-semibold -tracking-tighter">
              Legal Policies
            </span>
            <Icon
              icon={isLegalPolicyOpen ? "bx:chevron-up" : "bx:chevron-down"}
              className="ml-2 w-4 h-4 sm:hidden"
            />
          </h2>
          <div className="hidden sm:block">
            <Link to="/TermsAndConditions" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
              Terms & Conditions
            </Link>
            <Link to="/PrivacyPolicies" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
              Privacy Policies
            </Link>
            <Link to="/RefundCancellation" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
              Refund & Cancellation Policies
            </Link>
          </div>
          <div className="sm:hidden">
            {isLegalPolicyOpen && (
              <>
                <Link to="/TermsAndConditions" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
                  Terms & Conditions
                </Link>
                <Link  to="/PrivacyPolicies" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
                  Privacy Policies
                </Link>
                <Link  to="/RefundCancellation" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
                  Refund & Cancellation Policies
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Our Work */}
        <div className="section-header flex flex-col gap-2">
          <h2
            onClick={() => setIsOurWorkOpen(!isOurWorkOpen)}
            className="flex items-center justify-between cursor-pointer sm:cursor-default"
          >
            <span className="text-lg font-semibold -tracking-tighter">
              Our Work
            </span>
            <Icon
              icon={isOurWorkOpen ? "bx:chevron-up" : "bx:chevron-down"}
              className="ml-2 w-4 h-4 sm:hidden"
            />
          </h2>
          <div className="hidden sm:block">
            <Link  to="/OurWork" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
              Our Work
            </Link>
          </div>
          <div className="sm:hidden">
            {isOurWorkOpen && (
              <>
                <Link  to="/OurWork" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
                  Our Work
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Support Us */}
        <div className="section-header flex flex-col gap-2">
          <h2
            onClick={() => setIsSupportUsOpen(!isSupportUsOpen)}
            className="flex items-center justify-between cursor-pointer sm:cursor-default"
          >
            <span className="text-lg font-semibold -tracking-tighter">
              Support Us
            </span>
            <Icon
              icon={isSupportUsOpen ? "bx:chevron-up" : "bx:chevron-down"}
              className="ml-2 w-4 h-4 sm:hidden"
            />
          </h2>
          <div className="hidden sm:block">
            <Link  to="/Donation" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
              Donation
            </Link>
          </div>
          <div className="sm:hidden">
            {isSupportUsOpen && (
              <>
                <Link  to="/Donation" className="text-gray-300 font-semibold hover:text-gray-50   tracking-widest hover:underline cursor-pointer block my-3">
                  Donation
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <hr height="10px" />
      <div className="flex justify-center gap-8">
        <Link
          to="/facebook"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.facebook.com/share/1BcZnFZ1cK/", "_blank");
          }}
          className="cursor-pointer"
        >
          <Icon
            icon="entypo-social:facebook-with-circle"
            className="w-9 h-9 hover:text-[#E3501F] transition-colors"
          />
        </Link>
        <Link
          to="/Instagram"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.instagram.com/trustrcf?utm_source=qr&igsh=cGN1ZTM3OHdkZjl1", "_blank");
          }}
          className="cursor-pointer"
        >
          <Icon
            icon="entypo-social:instagram"
            className="w-9 h-9 hover:text-[#E3501F] transition-colors"
          />
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=rcft044@gmail.com", "_blank");
          }}
          className="cursor-pointer"
        >
          <Icon
            icon="ic:baseline-email"
            className="w-9 h-9 hover:text-[#E3501F] transition-colors"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;