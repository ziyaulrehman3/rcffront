import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadComp from "./UploadComp";

export default UpdateSlideShow = () => {
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
      const response = await axios.get("https://rcfback.onrender.com/getSlideShow");

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

  const handleAddImage = async (fileUrl) => {
    try {
      await axios.post("https://rcfback.onrender.com/addSlideShowImage", {
        file: fileUrl,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage({ text: "Image added successfully", type: "success" });
      fetchSlideshowImages(); // Refresh the list
    } catch (error) {
      console.error("Error adding slideshow image:", error);
      setMessage({ text: "Failed to add image", type: "error" });
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "https://rcfback.onrender.com/addSlideShowImage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      handleAddImage(response.data.fileUrl); // Pass the uploaded file URL to the handleAddImage function
    } catch (error) {
      console.error("Error uploading file:", error);
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
    <div className="w-[80%] bg-[#f4f3f3]">
      <h1 className="text-2xl font-bold mb-6">Update Slideshow</h1>

      {/* Message display */}
      {message.text && (
        <div
          className={`mb-4 p-3 rounded ${
            message.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Current slideshow images */}
      <div className="p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Current Slideshow Images</h2>

        {loading ? (
          <p>Loading images...</p>
        ) : slideshowImages.length === 0 ? (
          <p>No slideshow images available</p>
        ) : (
          <div className="flex flex-col gap-6">
            {slideshowImages.map((item, index) => (
              <div
                key={item._id}
                className="w-2/3 relative  rounded overflow-hidden"
              >
                <div className="flex justify-between items-center gap-4">
                  <div className="flex flex-col gap-4">
                    <img
                      src={item.image}
                      alt="Slideshow"
                      className="w-auto aspect-video h-[200px]  object-cover rounded-xl"
                    />
                    <p className="text-center">Image {index + 1}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteImage(item._id)}
                    className="bg-gray-200 h-[50px] w-[200px] text-gray-700 font-semibold p-2 rounded-full hover:bg-red-700"
                    aria-label="Delete image"
                  >
                    Delete Images
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Add new image form */}
      <div className="mb-8  flex flex-col items-center max-w-max p-6 rounded-lg">
        <UploadComp token={token} onFileUpload={handleAddImage} />
      </div>
    </div>
  );
};

