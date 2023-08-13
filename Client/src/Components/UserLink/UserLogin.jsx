import React, { useState, useEffect, useContext, createContext} from 'react';
import axios from 'axios'
import Mainpage from '../Home-Main/Mainpage';
import { useNavigate } from 'react-router-dom';


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
    
    <div className='userLogin_container'>
        <h2>Login page</h2>
        {isAuthenticated === false ? <h2 style={{color:'red'}}>{errorMessage}</h2>:''}
        <form  onSubmit={handleSubmit}>
            <label>Email</label>
            <input type='email' name='email' ></input>
            <br/>
            <label>Password</label>
            <input type='password' name='password' ></input>
            <br/>
            <input type='submit'></input>
          
        </form>
        <div className='register-page'>
            <p>Are you new?</p>
            <button><a href="/toUserRegister">Register</a></button>
        </div>
    </div>
  
  )
}

export default UserLogin;


