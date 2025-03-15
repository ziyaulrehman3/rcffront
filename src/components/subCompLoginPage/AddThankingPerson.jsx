import React, { useEffect, useState } from "react";
import axios from "axios";
import UploadComp from "./UploadComp";
import Input from "./Input";

export default function AddThankingPerson() {
  const [message, setMessage] = useState({ text: "", type: "" });
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [thankingPersons, setThankingPersons] = useState([]);
  const [loadingPersons, setLoadingPersons] = useState(true);


  useEffect(()=>console.log(selectedEvent),[selectedEvent])

  // Fetch all events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://rcfback.onrender.com/getAllEvents"
        );
        setEvents(response.data);
        console.log(response.data)
        setLoadingEvents(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setMessage({ text: "Failed to load events", type: "error" });
        setLoadingEvents(false);
      }
    };

    fetchEvents();
  },[])

  useEffect(()=>{

    const fetchThankingPersons = async () => {
      try {
        const response = await axios.get(
          `https://rcfback.onrender.com/getEvent/${selectedEvent}`
        );
        

        setThankingPersons(response.data.thankingPerson);
        console.log(response.data.thankingPerson)
        setLoadingPersons(false);
      } catch (error) {
        console.error("Error fetching thanking persons:", error);
        setLoadingPersons(false);
      }
    };

    fetchThankingPersons()

  }, [selectedEvent]);


  const getEventName = (eventId) => {
    const event = events.find((ev) => ev._id === eventId);
    return event ? event._name || event._id : "Unknown Event";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedEvent) {
      setMessage({ text: "Please select an event.", type: "failed" });
      return;
    }

    const photoUploadUrl = `https://rcfback.onrender.com/addThankingPerson/${selectedEvent}`;
    const formData = new FormData();
    formData.append("name", name);
    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post(photoUploadUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage({
        text: "Thanking Person added successfully",
        type: "success",
      });
      // Reset form
      setName("");
      setSelectedFile(null);
      setSelectedEvent("");
    } catch (error) {
      console.error("Error adding thanking person:", error);
      setMessage({ text: "Error adding thanking person", type: "failed" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Add Thanking Person Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full py-5 flex flex-col items-center mx-auto my-8 bg-gray-400 rounded-lg shadow-lg px-4"
      >
        <h2 className="text-2xl font-semibold mb-6">Add Thanking Person</h2>

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

        <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">

          <div className="flex flex-col items-center">
            <UploadComp hideButton={true} onFileSelect={setSelectedFile} />
          </div>

          <div className="flex flex-col gap-4 w-96">
            <Input
              type="text"
              label="Name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className="block text-sm font-medium text-gray-700">
              Select Event:
            </label>

            <select
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="" disabled>
                -- Select an event --
              </option>
              {events.map((event) => (
                <option key={event._id} value={event._id}>
                  {event._name || event._id}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 text-white font-bold px-12 py-2 bg-strokeyellow rounded-full"
        >
          Submit
        </button>
      </form>


      {/* Display Existing Thanking Persons as Cards */}

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">All Thanking Persons</h2>

        {loadingPersons ? (

          <p className="text-center">Loading thanking persons...</p>

        ) : thankingPersons.length === 0 ? (

          <p className="text-center">No thanking persons found.</p>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {thankingPersons.map((person) => (

              <div className="bg-white rounded-lg shadow-md overflow-hidden">

                <div className="h-48 overflow-hidden">
                 
                  {person.image ? (
                    <img
                      src={person.image}
                      className="w-full aspect-square object-cover"
                      alt={person.name}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}

                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg">{person.thankingPerson}</h3>

                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">Name:</span> {person.name}
                  </p>

                </div>

              </div>
            ))}
          </div>
        )} 
      </div>
    </div>
  );
}
