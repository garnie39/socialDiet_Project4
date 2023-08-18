import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

function NavbarPage() {
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
      <MDBNavbar
        expand="lg"
        light
        style={{
          backgroundColor: "orange",
          color: "white",
        }}
      >
        <MDBContainer fluid>
          <MDBNavbarBrand
            href="/"
            style={{ fontWeight: "bold", fontSize: "30px", margin: "0" }}
          >
            Diet.Mate
          </MDBNavbarBrand>

          <MDBNavbarNav
            className="me-auto mb-2 mb-lg-0"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(100px, 1fr))",
              gap: "10px",
              textAlign: "center",
            }}
          >
            <MDBNavbarItem style={{ placeSelf: "center" }}>
              <MDBNavbarLink href="/dailyRecord">Daily Record</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem style={{ placeSelf: "center" }}>
              <MDBNavbarLink href="toGraphRecord">Weight Graph</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem style={{ placeSelf: "center" }}>
              <MDBNavbarLink href="event">Event</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className="active" style={{ placeSelf: "center" }}>
              <MDBNavbarLink
                aria-current="page"
                href="#"
                onClick={handleLogout}
              >
                Logout
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default NavbarPage;
