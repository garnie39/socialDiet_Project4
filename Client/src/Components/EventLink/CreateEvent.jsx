import React, { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "../../assets/css/styleEvent.css";

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
        history("/event");
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
    history("/event");
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
      <div className="createContainer">
        <div className="createEventForm">
          <form onSubmit={handleSubmit}>
            <h1>Create Event</h1>
            <br />
            <div className="calendar_container">
              <label>Date:</label>
              <br />
              <DatePicker
                style={{ height: "25px", width: "145px", margin: "10px" }}
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

export default CreateEvent;
