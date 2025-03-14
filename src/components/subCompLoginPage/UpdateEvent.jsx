import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import axios from "axios";

const UpdateEvent = () => {
  // Get token from localStorage
  const token = localStorage.getItem("token");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [message, setMessage] = useState("");
  const [searchId, setSearchId] = useState("");

  const [formData, setFormData] = useState({
    eventName: "",
    story: "",
    sDate: "",
    eDate: "",
    location: "",
    members: "",
    shortDescription: "",
    estimated: [
      { estimatedPoint: "", estimatedValue: "" }, // Initial slot
    ],
  });

  useEffect(() => {
    if (!token) {
      setMessage("No authentication token. Please login first.");
    } else {
      fetchEvents();
    }
  }, [token]);

  const fetchEvents = async () => {
    if (!token) return;

    try {
      setLoading(true);
      const response = await axios.get(
        "https://rcfback.onrender.com/getAllEvents",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (Array.isArray(response.data)) {
        setEvents(response.data);
      } else {
        console.warn("API did not return an array:", response.data);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
      setMessage("Failed to load events: " + (error.response?.data?.message || error.message || "Unknown error"));
      setLoading(false);
    }
  };

  const handleEventSelectById = async () => {
    try {
      const event = await axios.get(`https://rcfback.onrender.com/getEvent/${searchId}`);
      setFormData(event.data);
      setMessage("Event found");
    } catch (err) {
      console.log(err);
      setMessage("Event not found");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEstimatedChange = (index, field, value) => {
    const updatedEstimated = [...formData.estimated];
    updatedEstimated[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      estimated: updatedEstimated,
    }));
  };

  const addEstimatedSlot = () => {
    if (formData.estimated.length < 20) {
      setFormData((prevData) => ({
        ...prevData,
        estimated: [...prevData.estimated, { estimatedPoint: "", estimatedValue: "" }],
      }));
    } else {
      setMessage("Maximum of 20 estimated cost slots reached.");
    }
  };

  const removeEstimatedSlot = (index) => {
    if (formData.estimated.length > 1) {
      const updatedEstimated = formData.estimated.filter((_, i) => i !== index);
      setFormData((prevData) => ({
        ...prevData,
        estimated: updatedEstimated,
      }));
    } else {
      setMessage("At least one estimated cost slot is required.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiResponse = await axios.put(
        `https://rcfback.onrender.com/eventUpdate/${searchId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (apiResponse.status >= 200 && apiResponse.status < 300) {
        setMessage("Event updated successfully");
        fetchEvents();
      } else {
        setMessage(`Update returned unexpected status: ${apiResponse.status}`);
      }
    } catch (error) {
      console.error("Error updating event:", error);
      setMessage("Failed to update event: " + (error.response?.data?.message || error.message || "Unknown error"));
    }
  };

  return (
    <div className="flex items-center bg-gray-100 w-[80%] justify-center p-4 md:p-6">
      <div className="w-full md:w-[90%] lg:w-[800px] mx-auto px-4">
        <h1 className="text-xl font-serif ml-8 font-semibold mb-12 text-center md:text-left">
          Welcome To Raah to Cure Foundation Trust
        </h1>

        {message && <div className="bg-red-100 text-red-800 p-3 rounded-lg mb-4 text-center">{message}</div>}

        <div className="bg-[#D9D9D9] py-6 px-4 md:px-8 rounded-lg">
          <div className="rounded">
            <h2 className="text-lg font-semibold mb-4">Event ID</h2>
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="w-full p-2 border-none rounded"
              placeholder="Enter your event location"
            />
            <button
              onClick={handleEventSelectById}
              className="bg-yellow-500 h-9  font-semibold border-none bg-strokeyellow w-[140px] rounded-full mt-4"
            >
              Fetch Details
            </button>
          </div>

          <label className="block font-semibold mt-3">Event Name</label>
          <textarea
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="w-full h-14 md:h-14 p-3 rounded-lg mb-3"
            placeholder="Enter Name of the event"
          ></textarea>

          <label className="block font-semibold mb-2">Story</label>
          <textarea
            name="story"
            value={formData.story}
            onChange={handleChange}
            className="w-full h-28 md:h-36 p-3 rounded-lg"
            placeholder="Enter the story of the event"
          ></textarea>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex-1">
              <label className="block font-semibold mb-2">Event Start Date</label>
              <input
                type="date"
                name="sDate"
                value={formData.sDate.slice(0, 10)}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-2">Event End Date</label>
              <input
                type="date"
                name="eDate"
                value={formData.eDate.slice(0, 10)}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block font-semibold mb-2">Event Location</label>
              <div className="relative">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your event location"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                <FaMapMarkerAlt className="absolute right-4 top-4 text-gray-500" />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2">Team Members</label>
              <div className="relative">
                <input
                  type="text"
                  name="members"
                  value={formData.members}
                  onChange={handleChange}
                  placeholder="Enter the team member name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 mb-3"
                />
                <FaUserFriends className="absolute right-4 top-4 text-gray-500" />
              </div>
            </div>
          </div>

          <label className="block font-semibold mb-2">Short Description</label>
          <textarea
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            className="w-full h-20 md:h-20 p-3 rounded-lg"
            placeholder="Enter the short description of the event"
          ></textarea>

          <h2 className="text-lg font-semibold mt-6 mb-4">Estimated Cost Estimate</h2>
          <div className="bg-white w-full p-4 rounded-lg">
            {formData.estimated.map((entry, index) => (
              <div key={index} className="flex md:items-center flex-col md:flex-row space-x-2 mb-2">
                <button
                  onClick={() => removeEstimatedSlot(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  -
                </button>
                <input
                  type="text"
                  placeholder="Enter value"
                  value={entry.estimatedPoint}
                  onChange={(e) => handleEstimatedChange(index, "estimatedPoint", e.target.value)}
                  className="flex-1 p-2 border rounded-md outline-none focus:ring focus:ring-blue-200"
                />
                <div className="flex items-center p-2 bg-gray-200 rounded-md">
                  <span className="mr-1">₹</span>
                  <input
                    type="text"
                    placeholder="Enter price"
                    value={entry.estimatedValue}
                    onChange={(e) => handleEstimatedChange(index, "estimatedValue", e.target.value)}
                    className="w-24 p-2 border rounded"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={addEstimatedSlot}
              className="text-green-500 hover:text-green-700"
            >
              +
            </button>
          </div>

          <div className="mt-6 flex justify-center md:justify-start">
            <button
              onClick={handleSubmit}
              className="w-full md:w-40 bg-[#034C5B] text-white py-3 rounded-full cursor-pointer"
            >
              Update Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEvent;