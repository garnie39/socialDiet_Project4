import React, { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

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
        console.log("res.data on login", response.data);
      })
      .catch((error) => {
        console.log("user login error", error);
      });

    axios
      .get(`/api/event/page/${id}`)
      .then((response) => {
        setFetchEvent(response.data);
        console.log("res.data on event", response.data);
      })
      .catch((error) => {
        console.log("fetch event error", error);
      });
  }, []);

  console.log(fetchData._id);
  console.log(fetchEvent._id);

  const [newFormDetails, setNewFormDetails] = useState({
    userID: fetchData._id,
    eventID: fetchEvent._id,
    username: fetchData.name,
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = newFormDetails;

    console.log(newData);

    axios
      .post("/api/comment", newData)
      .then((response) => {
        const namedataGet = response.config.fata;
        console.log("checkComment", namedataGet);
        history(`/event/page/${fetchEvent._id}`);
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
              type="comment"
              name="comment"
              placeholder="Comment"
              onChange={handleChange}
            />
            <input type="submit"></input>
          </FloatingLabel>
        </form>
      </div>
    </>
  );
}

export default AddComment;
