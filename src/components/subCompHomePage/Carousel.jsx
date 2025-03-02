import React, { useState, useEffect, useRef } from "react";
import JoinButtonComp from "../subCompOurWork/JoinButtonComp";
import { Icon } from "@iconify/react";
import axios from "axios";

function Carousel() {
  const [images, setImages] = useState([
    process.env.PUBLIC_URL + "/images/carousel/carouselLeft.png",
    "https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740350545/fxmlfm78ale4rcpzbsoy.png",
    process.env.PUBLIC_URL + "/images/carousel/carouselRight.png",
  ]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const centerImageRef = useRef(null);

  // Fetch the second object's images field from the API
  useEffect(() => {
    axios
      .get("https://rcfback.onrender.com/getAllEvents")
      .then((response) => {
        // Ensure data is an array and the second item exists
        if (Array.isArray(response.data) && response.data.length > 1) {
          const secondObj = response.data[1];
          // If secondObj.images is an array, set it in state
          if (Array.isArray(secondObj.images)) {
            setImages(secondObj.images);
            // Reset the loaded state when we get new images
            setImagesLoaded(false);
          }
        }
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const handleLeftClick = () => {
    // Rotate to the left: last image becomes first
    setImages((prevImages) => [prevImages[2], prevImages[0], prevImages[1]]);
    // Reset loaded state on rotation
    setImagesLoaded(false);
  };

  const handleRightClick = () => {
    // Rotate to the right: first image becomes last
    setImages((prevImages) => [prevImages[1], prevImages[2], prevImages[0]]);
    // Reset loaded state on rotation
    setImagesLoaded(false);
  };

  // Adjust height only after center image loads
  useEffect(() => {
    if (centerImageRef.current && imagesLoaded) {
      const centerImageHeight = centerImageRef.current.clientHeight;
      if (centerImageHeight > 0) {
        centerImageRef.current.style.height = `${centerImageHeight}px`;
      }
    }
  }, [imagesLoaded]);

  // Handle image load
  const handleImageLoad = (index) => {
    if (index === 1) {
      setImagesLoaded(true);
    }
  };

  return (
    <div className="carousel-container mt-16 flex flex-col gap-8 max-w-7xl mx-auto px-5 py-8  overflow-hidden">
      <div className="carousel-images flex gap-4 sm:gap-10 items-center justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            ref={index === 1 ? centerImageRef : null}
            className={`carousel-image-wrapper relative transition-all duration-300 ${
              index === 1
                ? "aspect-video flex-[0_0_60%] lg:flex-[0_0_34%] z-10 w-3/4 h-full shadow-[0_35px_60px_-15px_rgba(252,217,197,100%)]"
                : "flex-[0_0_35%] lg:flex-[0_0_23%] md:h-[150px] opacity-50"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              draggable="false"
              onLoad={() => handleImageLoad(index)}
              className={`carousel-image w-full h-full select-none rounded-lg ${
                index === 1 ? "shadow-[0_35px_60px_-15px_rgba(252,217,197,100%)]" : ""
              }`}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center">
        <Icon
          className="carousel-icon inline md:hidden z-10 cursor-pointer w-10 h-10 text-slate-50 bg-[#034C5B] rounded-full rotate-180"
          icon="weui:arrow-outlined"
          onClick={handleLeftClick}
          aria-label="Previous Slide"
        />
        <p className="z-20 carousel-caption w-4/6 md:w-full mx-auto text-black text-xl text-center -tracking-tighter font-shippori">
        Helping Communities Thrive And Have A Better Future
        </p>
        <Icon
          className="carousel-icon inline md:hidden z-10 cursor-pointer w-10 h-10 text-slate-50 bg-[#034C5B] rounded-full"
          icon="weui:arrow-outlined"
          onClick={handleRightClick}
          aria-label="Next Slide"
        />
      </div>

      <div className="carousel-footer flex justify-center items-center w-full gap-14 px-4">
        <Icon
          className="carousel-icon hidden md:inline z-10 cursor-pointer w-10 h-10 text-slate-50 bg-[#034C5B] rounded-full rotate-180"
          icon="weui:arrow-outlined"
          onClick={handleLeftClick}
          aria-label="Previous Slide"
        />
        <JoinButtonComp />
        <Icon
          className="carousel-icon hidden md:inline z-10 cursor-pointer w-10 h-10 text-slate-50 bg-[#034C5B] rounded-full"
          icon="weui:arrow-outlined"
          onClick={handleRightClick}
          aria-label="Next Slide"
        />
      </div>
    </div>
  );
}

export default Carousel;