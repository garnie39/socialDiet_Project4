import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function DeleteEvent() {
  const [selectedLoction, setSelectedLocation] = useState([]);
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    console.log("DeleteEvent is mounded");

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

  return (
    <div>
      <h1 style={{ color: "#ec9f48", whiteSpace: "narmal" }}>
        Would you like to delete event: {selectedLoction.eventType}?
      </h1>
      <div
        style={{
          gap: "10px",
          display: "flex",
          justifyContent: "center",
          width: "300px",
        }}
      >
        <button
          onClick={handleDelete}
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#ec9f48",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "0 auto",
            height: "45px",
            width: "120px",
            fontSize: "18px",
            whiteSpace: "nowrap",
          }}
        >
          Yes
        </button>
        <button
          onClick={() => window.history.back()}
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#ec9f48",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "0 auto",
            height: "45px",
            width: "120px",
            fontSize: "18px",
            whiteSpace: "nowrap",
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default DeleteEvent;
