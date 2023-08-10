import React ,{useState, useEffect} from 'react'
import './App.css'
import UserRegister from './Components/UserRegister'
import DailyRecord from './Components/DailyRecord'
import {Routes, Route} from 'react-router-dom'
import UserLogin from './Components/UserLogin'
import Mainpage from './Components/Mainpage'
import Homepage from './Components/Homepage'



function App() {
  //check user authenticafation (if false show login opage / if true show main page)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (value) => {
    setIsAuthenticated(value);
  };

  // useEffect(()=>{
  //   localStorage.setItem("auth", JSON.stringify(isAuthenticated));
  // }, [isAuthenticated]);


  return (
    <>
    <Routes>
    {/* <Route path="/" element={isAuthenticated === true? <Mainpage />:<UserLogin />}/> */}
      <Route path="/userLogin" element={<UserLogin setAuth={setAuth} />} />
      <Route path="/toUserRegister" element={<UserRegister />} />
      <Route path="/dailyRecord" element={<DailyRecord />} />
      <Route path="/mainpage" element={<Mainpage  setAuth={setAuth}/>}/>
      <Route path="/" element={<Homepage />}/>
    </Routes>

 
 
    </>
  )
}

export default App
