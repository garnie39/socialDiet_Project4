import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Maps from "./EventLink/GoogleMap";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
function SearchEvent() {
  const [search, setSearch] = useState("");

  const handleSearch = (newSearch) => {
    setSearch(newSearch);
  };

  const [formData, setFormData] = useState({
    search: search,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const latestSearch = JSON.stringify(formData);
  };

  // const handleChange = (event) => {
  //   const { search, value} = event.target

  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingSearch">
          <Form.Control
            type="search"
            placeholder="Search"
            style={{ width: "300px", height: "25px" }}
            // onChange={handleChange}
            // value={newsearchForm.search}
          />
        </FloatingLabel>
        <input type="submit"></input>
      </form>
      <Maps />
    </>
  );
}

export default SearchEvent;
