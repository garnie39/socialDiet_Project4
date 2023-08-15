import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import axios from "axios";
// import { DatePicker } from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const history = useNavigate();

  const [addNewDate, setAddNewDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setAddNewDate(newDate);
    setNewFormDetails({
      ...newFormDetails,
      date: newDate,
    });
  };

  const [newFormDetails, setNewFormDetails] = useState({
    userID: "",
    // userJoin: [],
    date: addNewDate,
    time: "",
    location: {
      locationName: "",
      street: "",
      city: "",
    },
    eventType: "",
    // comment: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = newFormDetails;

    console.log(newData);

    axios
      .post("/api/event", newData)
      .then((response) => {
        const nameDataGet = response.config.data;
        console.log("check111", nameDataGet);
        history("/");
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

  return (
    <>
      <div className="eventBar">
        <a href="/event">Back</a>
      </div>
      <div className="createEventForm">
        <form onSubmit={handleSubmit}>
          <h1>Create Event</h1>
          <br />
          <div className="calendar_container">
            <label>Date:</label>
            <br />
            {/* <DatePicker
              name="date"
              selected={addNewDate}
              onChange={handleDateChange}
            /> */}
          </div>
          <br />
          <label>Time:</label>
          <br />
          <FloatingLabel className="floatingTime">
            <Form.Control
              type="time"
              placeholder="Event Time"
              onChange={handleChange}
            />
          </FloatingLabel>
          <br />
          <label>Location:</label>
          <br />
          <FloatingLabel className="floatingLocation">
            <Form.Control
              type="locationName"
              placeholder="Location Name"
              onChange={handleChange}
            />
            <br />
            <Form.Control
              type="street"
              placeholder="Street Name"
              onChange={handleChange}
            />
            <br />
            <Form.Control
              type="city"
              placeholder="City"
              onChange={handleChange}
            />
          </FloatingLabel>
          <br />
          <label>Event Type:</label>
          <br />
          <FloatingLabel className="floatingEventType">
            <Form.Control
              type="eventType"
              placeholder="Event Type"
              onChange={handleChange}
            />
          </FloatingLabel>
          <input type="submit"></input>
        </form>
      </div>
    </>
  );
}

export default CreateEvent;
