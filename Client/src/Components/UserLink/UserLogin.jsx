import React, { useState, useEffect, useContext, createContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";

function UserLogin() {
  const history = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState();
  const [userLoginDetail, setUserLoginDetail] = useState({});
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    //console.log('user login check',fields);

    const [inputChange, setInputChange] = useState({
      email:"",
      password:"",
    })

    axios
      .post("/api/login", fields)
      .then((response) => {
        axios
          .get("/api/session")
          .then((response) => {
            console.log("res.data on session:", response.data);
            setIsAuthenticated(true);
          })
          .catch((error) => {
            setIsAuthenticated(false);
            console.log("user login error", error);
          });
        setUserLoginDetail(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        console.log("user login error", error.response.data.message);
      });
  };

  useEffect(() => {
    const handleChange = (event) => {
    const {name, value} =event.target;
    setInputChange ({
      ...inputChange,
        [name]:value,
    });
  };
  });

useEffect(() => {
    if (isAuthenticated === true) {
      console.log("check user Login Detail: ", userLoginDetail);
      //user login success redirect to mianpage
      history("/mainpage");
    } else {
      setIsAuthenticated(false);
      console.log("isAuthenticated false", errorMessage);
    }
  }, [isAuthenticated, userLoginDetail, errorMessage]);

  return (
    <>
      <MDBContainer
        className="p-5 my-5 d-flex flex-column "
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h2 style={{ textAlign: "center" }}>Log In</h2>
        {isAuthenticated === false ? (
          <p style={{ color: "#cc5e1a", textAlign: "center" }}>
            {errorMessage}
          </p>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit}>
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Email address"
            id="form1"
            type="email"
            name="email"
            onChange={handleChange} 
            value={inputChange.email}
          />
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Password"
            id="form2"
            type="password"
            name="password"
            onChange={handleChange} 
            value={inputChange.password}
          />

          <div className="d-flex justify-content-evenly mx-3 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#" style={{ color: "blue", whiteSpace: "nowrap" }}>
              Forgot password?
            </a>
          </div>
          <MDBBtn
            className="mb-4r"
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
          >
            Sign in
          </MDBBtn>
        </form>
        <div className="text-center">
          <p
            style={{
              margin: "20px",
            }}
          >
            Not a member?{" "}
            <a href="/toUserRegister" style={{ color: "blue" }}>
              Register
            </a>
          </p>
        </div>
      </MDBContainer>
    </>
  );
}

export default UserLogin;
