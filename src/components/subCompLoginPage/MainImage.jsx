import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadComp from "./UploadComp";

const MainImage = () => {
  const token = localStorage.getItem("token");
  const [events, setEvents] = useState([]);
  const [mainImage, setMainImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [selectEvent, setSelectEvent] = useState("");

  // Fetch all events (runs once)
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://rcfback.onrender.com/getAllEvents"
        );
        setEvents(response.data);
        console.log("Events:", response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
        setMessage({ text: "Failed to load events", type: "error" });
      }
    };
    fetchEvents();
  }, []);

  // Fetch main image when a valid event is selected
  useEffect(() => {
    if (!selectEvent) return;
    const fetchMainImage = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://rcfback.onrender.com/getEvent/${selectEvent}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        // Normalize the response: If imageMain is not an array, turn it into one.
        const images = Array.isArray(response.data.imageMain)
          ? response.data.imageMain
          : response.data.imageMain
          ? [response.data.imageMain]
          : [];
        setMainImage(images);
        console.log("Main Image:", images);
      } catch (error) {
        console.error("Error fetching main image:", error);
        setMessage({ text: "Failed to load main image", type: "error" });
      }
      setLoading(false);
    };
    fetchMainImage();
  }, [selectEvent, token]);

  return (
    <div className="p-8 w-full bg-[#f4f3f3]">
      <h1 className="text-2xl font-bold mb-6 text-center">Update Main Image</h1>

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

      {/* Current main image */}
      <div className="p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Main Image</h2>

        <div className="flex flex-col gap-4 w-96">
          <label className="block text-sm font-medium text-gray-700">
            Select Event:
          </label>
          <select
            value={selectEvent}
            onChange={(e) => setSelectEvent(e.target.value)}
            className="py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="" disabled>
              -- Select an event --
            </option>
            {events.map((event) => (
              <option  key={event._id} value={event._id}>
                {event._name || event._id}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <p className="text-center">Loading image...</p>
        ) : mainImage.length === 0 ? (
          <p className="text-center bg-red-800 text-white font-bold py-2 my-4">
            No Main Image available for this event.
          </p>
        ) : (
          <div className="my-4 flex flex-col gap-6">
            {mainImage.map((url, index) => (
              <div
                key={index}
                className="md:w-2/3 relative rounded overflow-hidden"
              >
                <img
                  src={url}
                  alt="mainimage"
                  className="w-full sm:w-auto aspect-video md:h-[200px] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add new image form */}
      <div className="mb-8 flex flex-col items-center max-w-max p-6 rounded-lg">
        <h3 className="font-bold">Replace Main Image</h3>
        <UploadComp
          token={token}
          uploadUrl={`https://rcfback.onrender.com/addMainImage/${selectEvent}`}
        />
      </div>
    </div>
  );
};

export default MainImage;
