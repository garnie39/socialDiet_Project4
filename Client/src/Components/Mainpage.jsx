import React from 'react'
import DailyRecord from './DailyRecord'
import NavbarPage from './Navbar'
import axios from 'axios'

function Mainpage(props) {

    const handleLogout =()=>{
        axios.delete("http://localhost:3000/api/logout").then((res) => {
            console.log(res)
        })
    }
  return (
    <div className='main-page-container'>
        <hr/>
        <div className='daily-record-div'>
            <h1>main page  </h1>
            <p>Once user logged in this page show </p>
            <ul>
                <li>Here is Dailyrecode.jsx</li>
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