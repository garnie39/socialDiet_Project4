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
        setUserID(response.data._id);
      })
      .catch((error) => {
        console.log("user login error", error);
      });

    console.log("Get coomments is mounted");
    axios
      .get(`/api/comment/${id}`)
      .then((response) => {
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
    <div className="comments">
      {comments.map((comm) => {
        return (
          <div className="comment" key={comm._id}>
            <h5>
              {comm.username}: {comm.comment}
            </h5>
            {comm.userID === userID && (
              <button
                onClick={() => handleDelete(comm._id)}
                style={{
                  border: "0",
                  color: "#ec9f48",
                  backgroundColor: "rgb(255, 252, 240)",
                }}
              >
                <i class="bi bi-x-circle"></i>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default GetEventComments;
