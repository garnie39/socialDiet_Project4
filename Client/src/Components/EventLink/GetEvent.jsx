import React, { useState, useEffect } from "react";
import Maps from "./GoogleMap";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import "../../assets/css/styleEvent.css";

function GetAllEvents() {
  const [locations, setLocations] = useState([]);
  const [selectedLoction, setSelectedLocation] = useState(null);
  const history = useNavigate();

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
    setSelectedLocation(locationName);
  };

  const handleOnClick = () => {
    history("/event/create");
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="eventcontainer">
      <div className="map">
        {selectedLoction && <Maps location={selectedLoction} />}
      </div>
      <button
        className="btn-primary"
        style={{
          color: "white",
          backgroundColor: "#ec9f48",
          border: "0",
          borderRadius: "5px",
          height: "40px",
          width: "150px",
          margin: "10px",
        }}
        onClick={handleOnClick}
      >
        <i
          className="bi bi-plus"
          style={{ color: "white", backgroundColor: "#ec9f48" }}
        >
          Create Event
        </i>
      </button>
      <div className="eventCon">
        {locations.map((event) => (
          <div
            className="eventbox"
            key={event._id}
            onClick={() => handleEventClick(event.location.locationName)}
          >
            <h3>Event: {event.eventType}</h3>
            <p>
              Date: {formatDate(event.date)} & Time: {event.time}
            </p>
            <Link to={`/event/page/${event._id}`}>More Info</Link>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetAllEvents;
