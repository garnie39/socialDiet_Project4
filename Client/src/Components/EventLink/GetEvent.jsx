import React, { useState, useEffect } from "react";
import Maps from "./GoogleMap";
import axios from "axios";

function GetAllEvents() {
  const [locations, setLocations] = useState([]);
  const [selectedLoction, setSelectedLocation] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/event")
      .then((response) => {
        console.log(response.data);
        setLocations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
      });
  }, []);

  const handleEventClick = (locationName) => {
    console.log("click");
    console.log(locationName);
    setSelectedLocation(locationName);
  };

  return (
    <div>
      <div>{selectedLoction && <Maps location={selectedLoction} />}</div>
      {locations.map((event) => (
        <div
          key={event._id}
          onClick={() => handleEventClick(event.location.locationName)}
        >
          <h3>Event: {event.eventType}</h3>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
        </div>
      ))}
    </div>
  );
}

export default GetAllEvents;
