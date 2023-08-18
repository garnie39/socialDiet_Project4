import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function GetEventComments() {
  const [comments, setComments] = useState([]);
  const [userID, setUserID] = useState(null);
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("/api/session")
      .then((response) => {
        console.log("res.data on login", response.data);
        setUserID(response.data._id);
      })
      .catch((error) => {
        console.log("user login error", error);
      });

    console.log("Get coomments is mounted");
    axios
      .get(`/api/comment/${id}`)
      .then((response) => {
        console.log(response.data.comments);
        console.log(typeof response.data.comments);
        setComments(response.data.comments);
      })
      .catch((error) => {
        console.error("Error fetching comment data:", error);
      });
  }, []);

  const handleDelete = (commentID) => {
    axios
      .delete(`/api/comment/${commentID}`)
      .then((response) => {
        console.log(response);
        history(`/event/page/${id}`);
        window.location.reload();
      })
      .catch((error) => {
        console.log("Delete Event Error", error);
      });
  };

  return (
    <div className="commentContainer">
      {comments.map((comm) => {
        return (
          <div className="comment" key={comm._id}>
            {comm.userID === userID && (
              <button onClick={() => handleDelete(comm._id)}>X</button>
            )}
            <h5>
              {comm.username}: {comm.comment}
            </h5>
          </div>
        );
      })}
    </div>
  );
}

export default GetEventComments;
