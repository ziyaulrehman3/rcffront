import React, { useState } from "react";
import axios from "axios";

function UploadComp({ onFileUpload, token }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("https://rcfback.onrender.com/addSlideShow", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      onFileUpload(response.data.fileUrl); // Pass the uploaded file URL to the parent component
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="text-center flex flex-col items-start justify-center max-w-max">
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
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={handleUpload}
          className="text-white font-bold px-12 py-2 bg-strokeyellow rounded-full"
        >
          Add +
        </button>
        {selectedFile && <p className="text-sm text-gray-500">{selectedFile.name}</p>}
      </div>
    </div>
  );
}

export default UploadComp;