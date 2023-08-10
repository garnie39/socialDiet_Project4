import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Mainpage from './Mainpage';


function UserLogin(props) {
 console.log('show setAuth',props.setAut)

    const [userLoginDetail, setUserLoginDetail] =useState({
        email:'',
        password:''
    })

    const handleSubmit =  (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const fields = Object.fromEntries(formData);
        console.log('user login check',fields);
          
        axios.post('http://localhost:3000/api/login',fields)
            .then((response) => {
                console.log("res.data on login:", response.data);
                //props.setAuth(true)
            })
            .catch((error) => {
              console.log('user login error',error);
    })
}

    const handleChange = (event) =>{
        const {name,value} =event.target
        setUserLoginDetail({
            ...userLoginDetail,
            [name]:value
        })
        console.log(userLoginDetail)
    }

  return (
    <div className='userLogin_container'>
        <h2>Login page</h2>
        <form  onSubmit={handleSubmit}>
            <label>Email</label>
            <input type='email' name='email' onChange={handleChange} value={userLoginDetail.email}></input>
            <br/>
            <label>Password</label>
            <input type='password' name='password' onChange={handleChange} value={userLoginDetail.password}></input>
            <br/>
            <input type='submit'></input>
          
        </form>
        <div className='register-page'>
            <p>Are you new?</p>
            <button><a href="/toUserRegister">Register</a></button>
        </div>

        {/* <p>needs to fix if user logged in going to mainpage</p>
        <button><a href='/mainpage'>MAIN page</a></button> */}
    </div>
  )
}

export default UserLogin


