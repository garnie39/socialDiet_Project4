import React, { useState, useEffect, useContext, createContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
}
from 'mdb-react-ui-kit';


function UserLogin() {

    const history =useNavigate()

    const [isAuthenticated, setIsAuthenticated] = useState();
    const [userLoginDetail, setUserLoginDetail] =useState({})
    const [errorMessage, setErrorMessage] =useState();

    const handleSubmit =  (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const fields = Object.fromEntries(formData);
        //console.log('user login check',fields);
          
        axios.post('/api/login',fields)
            .then((response) => {
                axios.get('/api/session')
                        .then((response) => {
                            console.log("res.data on session:", response.data); 
                            setIsAuthenticated(true);
                        })
                        .catch((error) => {
                            setIsAuthenticated(false)
                            console.log('user login error',error);
                          
                });
                setUserLoginDetail(response.data);
            })
            .catch((error) => {
                setErrorMessage(error.response.data.message)
                console.log('user login error',error.response.data.message);
    });
};


useEffect(() => {
    if (isAuthenticated === true) {
        console.log('check user Login Detail: ', userLoginDetail);
        //user login success redirect to mianpage
        history("/mainpage")
    } else {
        setIsAuthenticated(false)
        console.log('isAuthenticated false',errorMessage);
    }
}, [isAuthenticated, userLoginDetail, errorMessage]);


  return (
    <>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <h2 style={{textAlign:'center'}}>Login page</h2>
      {isAuthenticated === false ? <p style={{color:'red', textAlign: 'center'}}>{errorMessage}</p>:''}
      <form  onSubmit={handleSubmit}>
          <MDBInput wrapperClass='mb-4' label='Email address' id='form1'  type='email' name='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name='password' />

          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#" style={{color:'blue'}}>Forgot password?</a>
          </div>
            <MDBBtn className='mb-4' type='submit' style={{textAlign:'center'}} >Sign in</MDBBtn>
      </form>
      <div className="text-center">
        <p>Not a member? <a href="/toUserRegister" style={{color:'blue'}}>Register</a></p>
      </div>
    </MDBContainer>
    </>
  );
}

export default UserLogin;


