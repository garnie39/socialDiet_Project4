import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function DeleteEvent() {
  const [selectedLoction, setSelectedLocation] = useState([]);
  const [deleteEvent, setDeleteEvent] = useState([]);
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    console.log("DeleteEvent is mounded");

    axios
      .get("/api/session")
      .then((response) => {
        console.log("res.data on login", response.data);
      })
      .catch((error) => {
        console.log("user login error", error);
      });

    axios
      .get(`/api/event/page/${id}`)
      .then((response) => {
        setSelectedLocation(response.data);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
      });
  }, []);

  const handleDelete = () => {
    axios
      .delete(`/api/event/${id}`)
      .then((response) => {
        console.log(response);
        history("/event");
        window.location.reload();
      })
      .catch((error) => {
        console.log("Delete Event Error", error);
      });
  };

  // const handleReturn = () => {
  //   window.history.goBack();
  // };
  return (
    <div>
      <h1>Would you like to delete event: {selectedLoction.eventType}?</h1>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={() => window.history.back()}>No</button>
    </div>
  );
}

export default DeleteEvent;
