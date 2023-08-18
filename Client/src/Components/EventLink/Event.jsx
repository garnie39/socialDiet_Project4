import React, { useState, useEffect } from "react";
import axios from "axios";
import GetAllEvents from "./GetEvent";
import NavbarPage from "../Home-Main/Navbar";
import "../../assets/css/styleEvent.css";

// import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
// import Form from "react-bootstrap/Form";

function SearchEvent() {
  useEffect(() => {
    axios
      .get("/api/session")
      .then((response) => {
        console.log("res.data on login", response.data);
      })
      .catch((error) => {
        console.log("user login error", error);
      });
  }, []);

  return (
    <>
      <div className="navbar-page-container">
        <NavbarPage />
      </div>
      {/* <form>
        <FloatingLabel controlId="floatingSearch">
        <Form.Control
        type="search"
        placeholder="Search"
        style={{ width: "300px", height: "25px" }}
        // onChange={handleChange}
        // value={newsearchForm.search}
        />
        <input type="submit"></input>
        </FloatingLabel>
      </form> */}
      <div className="Econtainer">
        <GetAllEvents />
      </div>
    </>
  );
}

export default SearchEvent;
