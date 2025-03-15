import { useState } from "react";
import { FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import axios from 'axios';

export default function EventForm() {
  const [formData, setFormData] = useState({
    eventName: "",
    story: "",
    sDate: "",
    eDate: "",
    location: "",
    members: "",
    shortDescription: "",
    estimated: [
      { estimatedPoint: "", estimatedValue: "" },
    ],
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

  const handleSubmit = async () => {
    setMessage("Your event has been added!");
    setTimeout(() => setMessage(""), 3000);
    try {
      const reqResponse = await axios.post('https://rcfback.onrender.com/addEvent', formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(reqResponse);
    } catch (err) {
      console.log(err);
    }

    setFormData({
      eventName: "",
      story: "",
      sDate: "",
      eDate: "",
      location: "",
      members: "",
      shortDescription: "",
      estimated: [
        { estimatedPoint: "", estimatedValue: "" },
      ],
    });
  };

  return (
    <div className="flex items-center bg-gray-100 w-[80%] justify-center p-4 md:p-6">
      <div className="w-full md:w-[90%] lg:w-[800px] mx-auto px-4">
        <h1 className="text-xl font-serif ml-8 font-semibold mb-12 text-center md:text-left">
          Welcome To Raah to Cure Foundation Trust
        </h1>

        {message && <div className="bg-green-100 text-green-800 p-3 rounded-lg mb-4 text-center">{message}</div>}

        <div className="bg-[#D9D9D9] py-6 px-4 md:px-8 rounded-lg">
          <label className="block font-semibold mb-2">Event Name</label>
          <textarea
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            className="w-full h-14 md:h-14 p-3 rounded-lg mb-2"
            placeholder="Enter Name of the event"
          ></textarea>

          <label className="block font-semibold mb-2">Story</label>
          <textarea
            name="story"
            value={formData.story}
            onChange={handleInputChange}
            className="w-full h-28 md:h-36 p-3 rounded-lg"
            placeholder="Enter the story of the event"
          ></textarea>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex-1">
              <label className="block font-semibold mb-2">Event Start Date</label>
              <input
                type="date"
                name="sDate"
                value={formData.sDate}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div className="flex-1">
              <label className="block font-semibold mb-2">Event End Date</label>
              <input
                type="date"
                name="eDate"
                value={formData.eDate}
                onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
            onChange={handleInputChange}
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
              Add Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}