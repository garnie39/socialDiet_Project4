import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function UpdateEvent() {
  const [event, setEvent] = useState([]);
  const [userID, setUserID] = useState(null);
  const { id } = useParams();

  const history = useNavigate();

  const [addNewDate, setAddNewDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setAddNewDate(newDate);
    setNewFormDetails({
      ...FormData,
      date: newDate,
    });
  };

  useEffect(() => {
    console.log("updateEvent is mounded");
    axios
      .get("/api/session")
      .then((response) => {
        setUserID(response.data._id);
        console.log("res.data on login", response.data);
      })
      .catch((error) => {
        console.log("user login error", error);
      });
    axios
      .get(`/api/event/page/${id}`)
      .then((response) => {
        setEvent(response.data);
        console.log("eventPage is on", response.data);
      })
      .catch((error) => {
        console.log("couldn't get event", error);
      });
  }, []);

  const [newFormDetails, setNewFormDetails] = useState({
    userID: userID,
    date: addNewDate,
    time: "",
    location: {
      locationName: "",
      street: "",
      city: "",
    },
    eventType: "",
    eventDetail: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = newFormDetails;

    newData.location = {
      locationName: newData.locationName,
      street: newData.street,
      city: newData.city,
    };

    axios
      .patch(`/api/event/${id}`, newData)
      .then((response) => {
        const nameDataGet = response.config.data;
        console.log("check123", nameDataGet);
        history(`/event/page/${id}`);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setNewFormDetails({
      ...newFormDetails,
      [name]: value,
    });
  };

  const handleOnClick = () => {
    history(`/event/page/${id}`);
  };

  return (
    <>
      <div className="eventBar">
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
      </div>
      <div className="updateEvent">
        <div className="UpdateEventForm">
          <form onSubmit={handleSubmit}>
            <h1>Edit Event</h1>
            <br />
            <div className="calendar_container">
              <label>Date:</label>
              <br />
              <DatePicker
                name="date"
                selected={addNewDate}
                onChange={handleDateChange}
              />
            </div>
            <br />
            <label>Time:</label>
            <br />
            <FloatingLabel className="floatingTime">
              <Form.Control
                style={{ height: "25px", width: "145px", margin: "10px" }}
                type="time"
                name="time"
                placeholder="Event Time"
                onChange={handleChange}
              />
            </FloatingLabel>
            <br />
            <label>Location:</label>
            <br />
            <FloatingLabel className="floatingLocation">
              <Form.Control
                style={{
                  height: "25px",
                  width: "145px",
                  margin: "5px",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                }}
                type="locationName"
                name="locationName"
                placeholder="Location Name"
                onChange={handleChange}
              />
              <Form.Control
                style={{
                  height: "25px",
                  width: "145px",
                  margin: "5px",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                }}
                type="street"
                name="street"
                placeholder="Street Name"
                onChange={handleChange}
              />
              <Form.Control
                style={{
                  height: "25px",
                  width: "145px",
                  margin: "5px",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                }}
                type="city"
                name="city"
                placeholder="City"
                onChange={handleChange}
              />
            </FloatingLabel>
            <br />
            <FloatingLabel className="floatingEventType">
              <Form.Control
                style={{
                  height: "25px",
                  width: "480px",
                  margin: "10px",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                }}
                type="eventType"
                name="eventType"
                placeholder="Event Type"
                onChange={handleChange}
              />
            </FloatingLabel>
            <FloatingLabel className="floatingEventType">
              <Form.Control
                style={{
                  height: "150px",
                  width: "480px",
                  margin: "10px",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                }}
                as="textarea"
                rows={6}
                name="eventDetail"
                placeholder="Event Detail"
                onChange={handleChange}
              />
            </FloatingLabel>
            <input type="submit"></input>
          </form>
        </div>
      </div>
    </>
  );
}
export default UpdateEvent;
