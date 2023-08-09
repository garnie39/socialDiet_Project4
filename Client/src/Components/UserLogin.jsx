import React, { useState, useEffect } from 'react';



function UserLogin() {

    const [userLoginDetail, setUserLoginDetail] =useState({
        email:'',
        password:''
    })


    // const handleChange = () =>{
    //     setUserLoginDetail({

    //     })
    // }
  return (
    <div className='userLogin_container'>
        <h2>Login page</h2>
        <form>
            <label>Email</label>
            <input type='email' name='email'></input>
            <br/>
            <label>Password</label>
            <input type='password' name='password'></input>
            <br/>
            <input type='submit'></input>
        </form>
        <div className='register-page'>
            <p>Are you new?</p>
            <button><a href='/usreRegister'>Register</a></button>
        </div>
    </div>
  )
}

export default UserLogin