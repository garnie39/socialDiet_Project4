import React, { useState, useEffect } from "react";
import Maps from "./GoogleMap";
import axios from "axios";
import { useParams } from "react-router-dom";

function GetSingleEventPage() {
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedMap, setSelectedMap] = useState(null);
  const [comment, setComment] = useState([]);
  const [userID, setUserID] = useState(null);
  console.log(selectedLocation);
  const { id } = useParams();

  useEffect(() => {
    console.log("eventsinglepage is mounted");
    axios
      .get("/api/session")
      .then((response) => {
        console.log("res.data on login", response.data);
        setUserID(response.data._id);
      })
      .catch((error) => {
        console.log("user login error", error);
      });

    axios
      .get(`/api/event/page/${id}`)
      .then((response) => {
        setSelectedLocation(response.data);
        setSelectedMap(response.data.location.locationName);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
      });
  }, []);

  if (userID === selectedLocation.userID) {
    return (
      <div>
        <a href="/event">Back</a>
        <a href={`/event/${selectedLocation._id}`}>Edit</a>
        <a href={`/event/delete/${selectedLocation._id}`}>Delete</a>
        <div>{selectedMap ? <Maps location={selectedMap} /> : <></>}</div>
        <div>
          <h1>{selectedLocation.eventType}</h1>
          <h3>Date: {selectedLocation.date}</h3>
          <h3>Time: {selectedLocation.time}</h3>
          <h4>Detail: {selectedLocation.eventDetail}</h4>
          <p>Comment:</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <a href="/event">Back</a>
        <div>{selectedMap ? <Maps location={selectedMap} /> : <></>}</div>
        <div>
          <h1>{selectedLocation.eventType}</h1>
          <h3>Date: {selectedLocation.date}</h3>
          <h3>Time: {selectedLocation.time}</h3>
          <h4>Detail: {selectedLocation.eventDetail}</h4>
          <p>Comment:</p>
        </div>
      </div>
    );
  }
}

export default GetSingleEventPage;
