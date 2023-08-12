import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios'
import Mainpage from './Mainpage';
import { useNavigate } from "react-router-dom"
//import { UserIDContext } from '../App.js'

function UserLogin(props) {

    const history =useNavigate()
     //const setUserLoginDetailId= useContext(UserIDContext)

    //console.log('userlogin react page check useContext:',setUserLoginDetailId )

    // const [userLoginDetail, setUserLoginDetail] =useState({
    //     email:'',
    //     password:'',
    //     _id:''
    // })

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
                            //props.setUserLoginDetailId(response.data); 
                        })
                        .catch((error) => {
                        console.log('user login error',error);
                })
                console.log("res.data on login:", response.data);
               // props.setUserLoginDetailId(response.data.user)
                //user login success redirect to mianpage
               history("/mainpage")

            })
            .catch((error) => {
              console.log('user login error',error);
    })
}

    // const handleChange = (event) =>{
    //     const {name,value} =event.target
    //     setUserLoginDetail({
    //         ...userLoginDetail,
    //         [name]:value
    //     })
    //     console.log(userLoginDetail)
    // }

  return (
    <div className='userLogin_container'>
        <h2>Login page</h2>
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

        {/* <p>needs to fix if user logged in going to mainpage</p>
        <button><a href='/mainpage'>MAIN page</a></button> */}
    </div>
  )
}

export default UserLogin


