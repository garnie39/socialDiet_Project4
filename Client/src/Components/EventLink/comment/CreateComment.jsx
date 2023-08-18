import React, { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import "../../../assets/css/styleEvent.css";

function AddComment() {
  const [fetchData, setFetchData] = useState([]);
  const [fetchEvent, setFetchEvent] = useState([]);
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("/api/session")
      .then((response) => {
        setFetchData(response.data);
        setNewFormDetails({
          userID: response.data._id,
          username: response.data.name,
        });
        console.log("res.data on login", response.data);
      })
      .catch((error) => {
        console.log("user login error", error);
      });

    axios
      .get(`/api/event/page/${id}`)
      .then((response) => {
        setFetchEvent(response.data);
        setNewFormDetails({ eventID: response.data._id });
        console.log("res.data on event", response.data);
      })
      .catch((error) => {
        console.log("fetch event error", error);
      });
  }, []);

  const [newFormDetails, setNewFormDetails] = useState({
    userID: "",
    eventID: "",
    username: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = newFormDetails;

    axios
      .post("/api/comment", newData)
      .then((response) => {
        const namedataGet = response.config.data;
        console.log("checkComment", namedataGet);
        history(`/event/page/${fetchEvent._id}`);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFormDetails({
      ...newFormDetails,
      [name]: value,
    });
  };

  return (
    <>
      <div className="commentBar">
        <form onSubmit={handleSubmit}>
          <FloatingLabel className="floatingTime">
            <Form.Control
              style={{
                height: "100px",
                width: "300px",
                margin: "10px",
                fontFamily: "sans-serif",
              }}
              as="textarea"
              rows={5}
              name="comment"
              placeholder="Comment"
              onChange={handleChange}
            />
            <br />
            <input
              type="submit"
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
            ></input>
          </FloatingLabel>
        </form>
      </div>
    </>
  );
}

export default AddComment;
