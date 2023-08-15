import React, { useState, useEffect } from "react";
import Maps from "./GoogleMap";
import axios from "axios";

function GetSingleEventPage(props) {
  const [selectedLocation, setSelectedLocation] = useState({});

  useEffect(() => {
    axios
      .get(`/api/event/${props._id}`)
      .then((response) => {
        setSelectedLocation(response.data);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
      });
  }, []);

  return (
    <div>
      <a href="/event">Back</a>
      <a href="/updateevent">Edit Event</a>
      <div>
        <Maps location={selectedLocation.locationName} />
      </div>
      <div>
        <h1>{props.eventType}</h1>
        <h3>Date: {props.date}</h3>
        <h3>Time: {props.time}</h3>
        <p>Comment:</p>
      </div>
    </div>
  );
}

export default GetSingleEventPage;
