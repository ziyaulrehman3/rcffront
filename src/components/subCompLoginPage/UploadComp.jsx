import React, { useEffect, useState } from "react";
import axios from "axios";

function UploadComp({ uploadUrl, hideButton = false, onFileSelect }) {
  const token = localStorage.getItem("token");
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (onFileSelect && file) {
      onFileSelect(file);
    }
  };
  
  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(uploadUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setSelectedFile(null);
      setMessage({ text: "Image Added successfully", type: "success" });
      return response.data; // Return the response data for external use
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage({ text: "Error Uploading file", type: "failed" });
      throw error;
    }
  };

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="text-center flex flex-col items-start justify-center max-w-max">
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
      <div>
        <label
          htmlFor="fileInput"
          className="bg-white h-[200px] w-[180px] rounded-md my-4 flex flex-col items-center justify-evenly"
        >
          <img
            className="h-20 w-24 rounded-lg object-cover"
            src="https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740955853/image_kxnuwj.png"
            alt="upload img"
          />
          <p className="text-green-600 font-semibold">Upload Image</p>
        </label>
        <input
          name="fileInput"
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Only display the upload button if hideButton is false */}
        {!hideButton && uploadUrl && (
          <button
            onClick={handleUpload}
            className="text-white font-bold px-12 py-2 bg-strokeyellow rounded-full"
          >
            Add +
          </button>
        )}
        {selectedFile && (
          <p className="text-sm text-gray-500">{selectedFile.name}</p>
        )}
      </div>
    </div>
  );
}

export default UploadComp;