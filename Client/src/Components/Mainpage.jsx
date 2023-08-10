import React from 'react'
import DailyRecord from './DailyRecord'
import NavbarPage from './Navbar'

function Mainpage() {
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
    </div>
  )
}

export default Mainpage