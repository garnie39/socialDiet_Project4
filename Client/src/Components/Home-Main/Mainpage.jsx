import React, { useEffect } from 'react'
import DailyRecord from '../DailyRecord'
import NavbarPage from './Navbar'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


function Mainpage() {

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
    <div className='main-page-container'>
        <hr/>
        <div className='daily-record-div'>
            <h1>main page  </h1>
            <p>Once user logged in this page show </p>
            <ul>
                <DailyRecord />
            </ul>
            <br/>
        </div>
        <div className='navbar-page-container'>
            <NavbarPage />
        </div>
        <button onClick={handleLogout}>logout</button>

    </div>
  )
}

export default Mainpage