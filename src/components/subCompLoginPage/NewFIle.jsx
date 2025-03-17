import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadComp from "./UploadComp";

const UpdateSlideshow = () => {
  const token = localStorage.getItem("token");
  const [slideshowImages, setSlideshowImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch current slideshow images
  useEffect(() => {
    fetchSlideshowImages();
  }, []);

  const fetchSlideshowImages = async () => {
    try {
      const response = await axios.get("https://rcfback.onrender.com/getSlideShow", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (Array.isArray(response.data)) {
        setSlideshowImages(response.data);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching slideshow images:", error);
      setMessage({ text: "Failed to load slideshow images", type: "error" });
      setLoading(false);
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      await axios.delete(`https://rcfback.onrender.com/removeSlideShow/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage({ text: "Image deleted successfully", type: "success" });
      fetchSlideshowImages(); // Refresh the list
    } catch (error) {
      console.error("Error deleting slideshow image:", error);
      setMessage({ text: "Failed to delete image", type: "error" });
    }
  };

  return (
    <div className="p-8 w-full bg-[#f4f3f3]">
      <h1 className="text-2xl font-bold mb-6 text-center">Update Slideshow</h1>

      {/* Message display */}
      {message.text && (
        <div
          className={`mb-4 p-3 rounded text-center ${
            message.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Current slideshow images */}
      <div className="p-6 rounded-lg mb-8">
        <h2 className="text-lg font-semibold mb-4">Current Slideshow Images</h2>

        {loading ? (
          <p className="text-center">Loading images...</p>
        ) : slideshowImages.length === 0 ? (
          <p className="text-center">No slideshow images available</p>
        ) : (
          <div className="flex flex-col gap-6">
            {slideshowImages.map((item, index) => (
              <div
                key={item._id}
                className="md:w-2/3 relative rounded overflow-hidden"
              >
                <div className=" flex flex-col lg:flex-row justify-between items-center gap-4">
                  <div className="flex flex-col gap-4">
                    <img
                      src={item.image}
                      alt="Slideshow"
                      className="w-full sm:w-auto aspect-video h-[200px] object-cover rounded-xl"
                    />
                  </div>
                  <button
                    onClick={() => handleDeleteImage(item._id)}
                    className="bg-gray-200 hover:bg-red-700 text-gray-700 hover:text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 w-full sm:w-[200px]"
                    aria-label="Delete image"
                  >
                    Delete Image
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Add new image form */}
      <div className="mb-8 flex flex-col items-center max-w-max p-6 rounded-lg">
        <UploadComp token={token} uploadUrl={"https://rcfback.onrender.com/addSlideShow"} />
      </div>

      
    </div>
  );
};

export default UpdateSlideshow;