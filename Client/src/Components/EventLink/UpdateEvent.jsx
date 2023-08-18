import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function UpdateEvent() {
  const [fetchData, setFetchData] = useState([]);
  const [event, setEvent] = useState([]);
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
        setFetchData(response.data);
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

  console.log(fetchData);
  console.log(event);

  const [newFormDetails, setNewFormDetails] = useState({
    userID: fetchData._id,
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

  return (
    <>
      <div className="eventBar">
        <a href={`/event/page/${id}`}>Back</a>
      </div>
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
              placeholder="Street"
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
          <br />
          <label>Event Details:</label>
          <br />
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
export default UpdateEvent;
