import React, { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const [fetchData, setFetchData] = useState([]);
  const history = useNavigate();

  const [addNewDate, setAddNewDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setAddNewDate(newDate);
    setNewFormDetails({
      ...newFormDetails,
      date: newDate,
    });
  };

  useEffect(() => {
    axios
      .get("/api/session")
      .then((response) => {
        setFetchData(response.data);
        console.log("res.data on login", response.data);
      })
      .catch((error) => {
        console.log("user login error", error);
      });
  }, []);

  console.log(fetchData._id);

  const [newFormDetails, setNewFormDetails] = useState({
    userID: fetchData._id,
    // userJoin: [],
    date: addNewDate,
    time: "",
    location: {
      locationName: "",
      street: "",
      city: "",
    },
    eventType: "",
    eventDetail: "",
    // comment: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = newFormDetails;

    console.log(event);
    console.log(newData);

    newData.location = {
      locationName: newData.locationName,
      street: newData.street,
      city: newData.city,
    };

    axios
      .post("/api/event", newData)
      .then((response) => {
        const nameDataGet = response.config.data;
        console.log("check111", nameDataGet);
        history("/mainpage");
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
              type="locationName"
              name="locationName"
              placeholder="Location Name"
              onChange={handleChange}
            />
            <br />
            <Form.Control
              type="street"
              name="street"
              placeholder="Street Name"
              onChange={handleChange}
            />
            <br />
            <Form.Control
              type="city"
              name="city"
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
              name="eventType"
              placeholder="Event Type"
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel className="floatingEventType">
            <Form.Control
              type="eventDetail"
              name="eventDetail"
              placeholder="Event Detail"
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
