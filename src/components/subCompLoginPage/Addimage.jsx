import React, { useState } from "react";
import axios from 'axios'

const Addimage = () => {
  const [eventId, setEventId] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");
  const [eventDetails, setEventDetails] = useState(null);
  const [imageList, setImageList] = useState([]);

  
  const fetchEventDetails = async () => {
    if (!eventId) return setMessage("Enter an Event ID");

    try {
      const res = await fetch(`https://rcfback.onrender.com/getevent?eventId=${eventId}`);
      const data = await res.json();

      if (res.ok) {
        setEventDetails(data);
        setMessage("");
      } else {
        setEventDetails(null);
        setMessage("Event not found");
      }
    } catch {
      setMessage("Error fetching event details");
    }
  };

 
  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (!eventId || !imageFile) return setMessage("Enter Event ID & select an image");

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const res = await axios.post(`https://rcfback.onrender.com/addImage/${eventId}`,formData,{
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type':"multipart/form-data"
        
      })

      const data = await res.json();
      setMessage(data.message || "Upload successful");
    } catch {
      setMessage("Upload failed");
    }
  };

  return (
    <div className="flex flex-col w-full gap-2 ml-10 min-h-screen rounded-xl p-4 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Event Image Management</h2>

      {/* Event ID  Fetch Button */}
      <div className="flex space-x-4  md:w-[50%] bg-white p-4 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Enter Event ID"
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
          className="p-2 border rounded w-64"
        />
        <button onClick={fetchEventDetails} className="px-4 py-2 bg-yellow-400 rounded-lg">
          Fetch Details
        </button>
      </div>

      {/* Display Event Details */}
      <div className="mt-4 p-4 w-full max-w-md">
        {eventDetails ? (
          <>
            <h3 className="text-lg font-semibold">{eventDetails.name}</h3>
            <p className="text-gray-600">{eventDetails.description}</p>
          </>
        ) : (
          <p className="text-gray-500">No event details available.</p>
        )}
      </div>

      {/* Upload Image */}
      <div className="flex flex-col mt-6">
        <label htmlFor="imageUpload" className="cursor-pointer">
          <div className="w-[180px] h-40 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg border">
            <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center">
              <img src="/cloud-upload-icon.png" alt="Upload" className="w-10 h-10" />
            </div>
            <p className="text-green-600 mt-2">Upload image</p>
          </div>
        </label>
        <input type="file" id="imageUpload" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} className="hidden" />
        <button onClick={handleImageUpload} className="w-[150px] ml-4 mt-4 px-6 py-2 bg-yellow-400 rounded-lg">
         Upload Image
        </button>
      </div>

      {/* Status Message */}
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
};

export default Addimage;
