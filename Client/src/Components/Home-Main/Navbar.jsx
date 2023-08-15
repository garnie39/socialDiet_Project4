import React ,{} from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';

function NavbarPage() {

  const logoutHistory =useNavigate()

    const handleLogout =()=>{
        axios.delete("/api/logout").then((res) => {
            console.log(res)
            logoutHistory("/")
        })
        .catch((error) => {
            console.log('logout error',error)
        })
    }


  return (
    <>

      <MDBNavbar expand='lg' light style={{ backgroundColor: 'orange' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>Diet.Mate</MDBNavbarBrand>
    
         
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
         
              <MDBNavbarItem>
                <MDBNavbarLink href='/dailyRecord'>Daily Record</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='toGraphRecord'>Weight Graph</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Program Activity</MDBNavbarLink>
              </MDBNavbarItem>
           
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#' onClick={handleLogout}>
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
