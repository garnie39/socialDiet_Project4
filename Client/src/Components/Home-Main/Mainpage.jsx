import React, { useEffect, useContext, createContext, useState } from 'react'
import NavbarPage from './Navbar'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
//import CaloriesRecord from '../RecordLink/Calories'


const UserIDContext = createContext();

export const useSomeCtx = () => useContext(UserIDContext);

function Mainpage() {

  return (
    <div className='main-page-container'>
        <hr/>
        <div className='daily-record-div'>
            <h1>main page  </h1>
         
            {/* <CaloriesRecord /> */}
            <br/>
        </div>
        <div className='navbar-page-container'>
            <NavbarPage />
        </div>
       

    </div>
  )
}

export default Mainpage