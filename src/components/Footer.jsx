import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  // This state holds the currently open section (e.g. "about", "legal", "work", "support")
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <div className="bg-black gap-8 text-white flex flex-col justify-between p-10">
      <div className="flex flex-col sm:flex-row justify-evenly gap-1">
        {/* About Us */}
        <div className="section-header flex flex-col gap-2">
          <h2
            onClick={() => toggleSection("about")}
            className="flex items-center justify-between cursor-pointer sm:cursor-default"
          >
            <span className="text-lg font-semibold -tracking-tighter">
              About Us
            </span>
            <Icon
              icon={openSection === "about" ? "bx:chevron-up" : "bx:chevron-down"}
              className="ml-2 w-4 h-4 sm:hidden"
            />
          </h2>
          {/* Large screens */}
          <div className="hidden sm:block">
            <Link
              to="/OurStory"
              className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
            >
              Our Story
            </Link>
            <Link
              to="/OurTeam"
              className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
            >
              Our Team
            </Link>
            <Link
              to="/Mission"
              className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
            >
              Mission and Vision
            </Link>
          </div>
          {/* Small screens */}
          <div className="sm:hidden">
            {openSection === "about" && (
              <>
                <Link
                  to="/OurStory"
                  className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
                >
                  Our Story
                </Link>
                <Link
                  to="/OurTeam"
                  className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
                >
                  Our Team
                </Link>
                <Link
                  to="/Mission"
                  className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
                >
                  Mission and Vision
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Legal Policies */}
        <div className="section-header flex flex-col gap-2">
          <h2
            onClick={() => toggleSection("legal")}
            className="flex items-center justify-between cursor-pointer sm:cursor-default"
          >
            <span className="text-lg font-semibold -tracking-tighter">
              Legal Policies
            </span>
            <Icon
              icon={openSection === "legal" ? "bx:chevron-up" : "bx:chevron-down"}
              className="ml-2 w-4 h-4 sm:hidden"
            />
          </h2>
          <div className="hidden sm:block">
            <Link
              to="/TermsAndConditions"
              className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/PrivacyPolicies"
              className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
            >
              Privacy Policies
            </Link>
            <Link
              to="/RefundCancellation"
              className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
            >
              Refund & Cancellation Policies
            </Link>
          </div>
          <div className="sm:hidden">
            {openSection === "legal" && (
              <>
                <Link
                  to="/TermsAndConditions"
                  className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/PrivacyPolicies"
                  className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
                >
                  Privacy Policies
                </Link>
                <Link
                  to="/RefundCancellation"
                  className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
                >
                  Refund & Cancellation Policies
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Our Work */}
        <div className="section-header flex flex-col gap-2">
          <h2
            onClick={() => toggleSection("work")}
            className="flex items-center justify-between cursor-pointer sm:cursor-default"
          >
            <span className="text-lg font-semibold -tracking-tighter">
              Our Work
            </span>
            <Icon
              icon={openSection === "work" ? "bx:chevron-up" : "bx:chevron-down"}
              className="ml-2 w-4 h-4 sm:hidden"
            />
          </h2>
          <div className="hidden sm:block">
            <Link
              to="/OurWork"
              className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
            >
              Our Work
            </Link>
          </div>
          <div className="sm:hidden">
            {openSection === "work" && (
              <Link
                to="/OurWork"
                className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
              >
                Our Work
              </Link>
            )}
          </div>
        </div>

        {/* Support Us */}
        <div className="section-header flex flex-col gap-2">
          <h2
            onClick={() => toggleSection("support")}
            className="flex items-center justify-between cursor-pointer sm:cursor-default"
          >
            <span className="text-lg font-semibold -tracking-tighter">
              Support Us
            </span>
            <Icon
              icon={openSection === "support" ? "bx:chevron-up" : "bx:chevron-down"}
              className="ml-2 w-4 h-4 sm:hidden"
            />
          </h2>
          <div className="hidden sm:block">
            <Link
              to="/Donation"
              className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
            >
              Donation
            </Link>
          </div>
          <div className="sm:hidden">
            {openSection === "support" && (
              <Link
                to="/Donation"
                className="text-gray-300 font-semibold hover:text-gray-50 tracking-widest hover:underline cursor-pointer block my-3"
              >
                Donation
              </Link>
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
          <img
            className="w-8 h-8 object-cover"
            src="https://img.icons8.com/?size=100&id=13912&format=png&color=000000"
            alt="facebook-icon"
          />
        </Link>
        <Link
          to="/Instagram"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.instagram.com/trustrcf?utm_source=qr&igsh=cGN1ZTM3OHdkZjl1",
              "_blank"
            );
          }}
          className="cursor-pointer"
        >
          <img
            className="w-8 h-8 object-cover"
            src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
            alt="instagram-icon"
          />
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=rcft044@gmail.com",
              "_blank"
            );
          }}
          className="cursor-pointer"
        >
          <img
            className="w-8 h-8 object-cover"
            src="https://img.icons8.com/?size=100&id=19408&format=png&color=000000"
            alt="mail-icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;