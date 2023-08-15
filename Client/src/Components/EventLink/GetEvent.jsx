import React, { useState, useEffect } from "react";
import Maps from "./GoogleMap";
import axios from "axios";

function GetAllEvents() {
  const [locations, setLocations] = useState([]);
  const [selectedLoction, setSelectedLocation] = useState(null);

  useEffect(() => {
    axios
      .get("/api/event")
      .then((response) => {
        setLocations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
      });
  }, []);

  const handleEventClick = (locationName) => {
    console.log("click");
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
          <p>
            Date: {event.date} & Time: {event.time}
          </p>
          <a href="/eventpage">More info</a>
        </div>
      ))}
    </div>
  );
}

export default GetAllEvents;
