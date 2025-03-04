import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Card = () => {
  const links = ["/Donation", "/Mission", "/TermsAndConditions"];
  const [cardContent, setCardContent] = useState([
    {
      image: process.env.PUBLIC_URL + "/images/cards/card1.png",
      title: "Donations & Contributions",
      description:
        "Every contribution fuels our mission to provide essential resources, uplift communities, and create lasting impact.",
    },
    {
      image: process.env.PUBLIC_URL + "/images/cards/card2.png",
      title: "Targeted Outreach & Support",
      description:
        "We identify and assist underprivileged communities, ensuring help reaches the right people at the right time.",
    },
    {
      image: process.env.PUBLIC_URL + "/images/cards/card3.png",
      title: "Trust & Transparency",
      description:
        "We uphold the highest standards of integrity, ensuring every donation is used ethically and effectively.",
    },
  ]);


  // Fetch data and update only the image field, preserving title and description
  useEffect(() => {
    axios
      .get("https://rcfback.onrender.com/getAllEvents")
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          setCardContent((prevCards) =>
            prevCards.map((card, index) => ({
              ...card,
              // If an API entry exists for this index, update the image; otherwise, keep the default
              image:
                response.data[index] && response.data[index].imageMain
                  ? response.data[index].imageMain
                  : card.image,
            }))
          );
        }
      })
      .catch((error) => console.error("Error fetching card data:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full my-14">
      <div className="text-center flex flex-col items-center gap-4 md:m-32 my-8">
        <h2 className="text-xl -tracking-tighter font-shippori">
          Our Impactful Services
        </h2>
        <h3 className="w-10/12 text-md lg:text-xl font-poppins font-normal text-[#E3501F]">
          Driving change through dedication and impactful initiatives.
        </h3>
        <p className="w-[85%] text-gray-400 text-base lg:w-2/3 font-poppins">
          We strive to uplift communities through targeted support, ethical
          practices, and sustainable programs.
        </p>
      </div>

      <div className="flex gap-5 justify-start lg:justify-center overflow-x-auto w-full px-5">
        {cardContent.map((card, index) => (
          <div
            className="flex-shrink-0 w-[300px] lg:w-[370px] flex flex-col gap-4 lg:gap-8 items-center justify-center"
            key={index}
          >
            <Link to={links[index]} className="w-full">
              <div className="flex flex-col w-full h-[370px] lg:h-[400px] p-4 aspect-square rounded-md shadow-md">
                <div className="w-full h-[350px] overflow-hidden">
                  <img
                    src={card.image}
                    alt={`Cards ${index + 1}`}
                    className="w-96 h-[200px] object-cover select-none rounded-sm shadow-md"
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col h-full justify-between items-">
                  <h3 className="text-xl lg:text-3xl lg:mt-3 font-light font-shippori">
                    {card.title}
                  </h3>
                  <div className="flex flex-col h-full justify-center gap-2 overflow-hidden">
                    <p className="text-[13px] tracking-widest text-gray-400 font-poppins">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
