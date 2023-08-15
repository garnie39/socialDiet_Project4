import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Maps from "./EventLink/GoogleMap";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import GetAllEvents from "./EventLink/GetEvent";
import NavbarPage from "./Navbar";
import { useNavigate } from "react-router-dom";

function SearchEvent() {
  // const [search, setSearch] = useState("");

  // const handleSearch = () => {

  // }
  // useEffect(() => {
  //   axios
  //     .get("/api/session")
  //     .then((response) => {
  //       console.log("res.data on login", response.data);
  //     })
  //     .cattch((error) => {
  //       console.log("user login error", error);
  //     });
  // }, []);

  const logoutHistory = useNavigate();

  const handleLogout = () => {
    axios
      .delete("/api/logout")
      .then((res) => {
        console.log(res);
        logoutHistory("/");
      })
      .catch((error) => {
        console.log("logout error", error);
      });
  };

  return (
    <>
      <a href="/event/create">+</a>
      <form>
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
      </form>
      <Maps />
      <GetAllEvents />
      <div className="navbar-page-container">
        <NavbarPage />
      </div>
      <button onClick={handleLogout}>logout</button>
    </>
  );
}

export default SearchEvent;
