import React, { useState, useEffect } from "react";
import axios from "axios";
import JoinButtonComp from "../subCompOurWork/JoinButtonComp";

function SlideShow() {
  const [slideImages, setSlideImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch images once on component mount
  useEffect(() => {
    axios
      .get("https://rcfback.onrender.com/getSlideShow")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setSlideImages(response.data);
        }
      })
      .catch((error) => console.error("Error fetching slideshow images:", error));
  }, []);

  // Auto-loop the slideshow
  useEffect(() => {
    if (slideImages.length === 0) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideImages.length);
    }, 5000); // e.g., change every 3 seconds

    return () => clearInterval(intervalId);
  }, [slideImages]);

  return (
    <div className="SlideShow-Component parent h-[45vh] sm:h-[60vh] lg:h-[80vh] xl:h-[85vh] -z-50">
      <div className="relative w-full h-full overflow-hidden">
        <div className="h-full w-full absolute">
          {slideImages.map((item, index) => (
            <img
              key={item._id}
              src={item.image}
              alt="Slide"
              className={`object-cover w-full h-full select-none ${
                index === currentIndex ? "block" : "hidden"
              }`}
              draggable="false"
            />
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-4 p-8 bg-black bg-opacity-60">
            <p className="text-[11px] md:text-base md:font-bold -tracking-tight font-poppins">
              Reach to Care Foundation Trust
            </p>
            <h1 className="lg:w-9/12 text-xl sm:text-2xl md:text-3xl lg:text-5xl sm:font-light text-shadow-md font-shippori">
              Empowering Lives, Uplifting Communities, and Creating Lasting Change
            </h1>
            <p className="w-8/12 md:text-xl font-poppins text-center  md:text-md leading-relaxed md:leading-relaxed">
              Reach to Care Foundation Trust empowers the underprivileged <span className="inline sm:hidden">Read More...</span>
              <span className="hidden sm:inline">
                through healthcare, education, and social welfare, driven by transparency and trust.
              </span>
            </p>
            <JoinButtonComp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;