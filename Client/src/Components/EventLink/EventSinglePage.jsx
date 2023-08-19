import React, { useState, useEffect, useContext } from "react";
import Maps from "./GoogleMap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import GetEventComments from "./comment/Comment";
import AddComment from "./comment/CreateComment";
import { UserIDContext } from "../../App";
import "../../assets/css/styleEvent.css";

function GetSingleEventPage() {
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedMap, setSelectedMap] = useState(null);
  const { id } = useParams();
  const userID = useContext(UserIDContext);
  const history = useNavigate();

  useEffect(() => {
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

  const formatDate = (date) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const handleOnClick = () => {
    history("/event");
  };

  const handleEditEvent = () => {
    history(`/event/${selectedLocation._id}`);
  };

  const handleDelete = () => {
    history(`/event/delete/${selectedLocation._id}`);
  };

  return (
    <div>
      <button
        className="btn-p"
        style={{
          color: "white",
          backgroundColor: "#ec9f48",
          border: "0",
          borderRadius: "5px",
          height: "40px",
          width: "100px",
          margin: "10px",
        }}
        onClick={handleOnClick}
      >
        <i class="bi bi-arrow-left-square-fill"> Back</i>
      </button>
      <div className="map">
        {selectedMap ? <Maps location={selectedMap} /> : <></>}
      </div>
      <div className="box">
        <div className="containerEvent">
          <div className="eventDetail">
            <h1
              style={{
                margin: "10px",
                padding: "0",
                color: "rgb(160, 89, 41)",
                width: "350px",
              }}
            >
              Event: {selectedLocation.eventType}
            </h1>
            {userID === selectedLocation.userID && (
              <div className="btn">
                <button
                  className="btn-p"
                  style={{
                    color: "white",
                    backgroundColor: "#ec9f48",
                    border: "0",
                    borderRadius: "5px",
                    height: "40px",
                    width: "100px",
                    margin: "10px",
                  }}
                  onClick={handleEditEvent}
                >
                  <i class="bi bi-pencil-square"> Edit</i>
                </button>
                <button
                  className="btn-p"
                  style={{
                    color: "white",
                    backgroundColor: "#ec9f48",
                    border: "0",
                    borderRadius: "5px",
                    height: "40px",
                    width: "100px",
                    margin: "10px",
                  }}
                  onClick={handleDelete}
                >
                  <i class="bi bi-trash"> Delete</i>
                </button>
              </div>
            )}
            <h3 style={{ color: "rgb(85, 85, 85)" }}>
              Event Date: {formatDate(selectedLocation.date)}
            </h3>
            <h3 style={{ color: "rgb(85, 85, 85)" }}>
              Time: {selectedLocation.time}
            </h3>
            <h3
              style={{
                color: "rgb(85, 85, 85)",
                whiteSpace: "break-spaces",
                width: "350px",
              }}
            >
              Event Detail: {selectedLocation.eventDetail}
            </h3>
            <AddComment />
          </div>
          <div className="commentContainer">
            <GetEventComments />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetSingleEventPage;
