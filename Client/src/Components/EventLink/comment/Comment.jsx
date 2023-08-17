import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function GetComments() {
  const [getComments, setGetComments] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/event/page/${id}`)
      .then((response) => {
        setSelectedEvent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
      });

    axios.get("/api/comment").then((response) => {
      console.log(response.data);
    });
  }, []);

  console.log(selectedEvent._id);
  console.log(getComments);
}

export default GetComments;
