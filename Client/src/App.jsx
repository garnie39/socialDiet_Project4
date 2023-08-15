import React ,{useState, useEffect, useContext, createContext} from 'react'
import './App.css'
import UserRegister from './Components/UserLink/UserRegister'
import DailyRecord from './Components/RecordLink/DailyRecord'
import {Routes, Route} from 'react-router-dom'
import UserLogin from './Components/UserLink/UserLogin'
import Mainpage from './Components/Home-Main/Mainpage'
import Homepage from './Components/Home-Main/Homepage'
import Event from "./Components/Event";
import GraphRecord from './Components/RecordLink/GraphRecord'
import axios from 'axios'

export const UserIDContext = createContext()

function App() {
 
  //const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userLoginDetailId, setUserLoginDetailId] =useState()


  useEffect (() => {
    axios.get('/api/session')
    .then((response) => {
        //console.log("session login check:", response.data);  
        setUserLoginDetailId(response.data._id)
    })
    .catch((error) => {
      console.log('user login error',error);
})
},[])

  return (
    <>
    <UserIDContext.Provider value={ userLoginDetailId } >
    <Routes>
    {/* <Route path="/" element={isAuthenticated === true? <Mainpage />:<UserLogin />}/> */}
      <Route path="/userLogin" element={<UserLogin />} />
      <Route path="/toUserRegister" element={<UserRegister />} />
      <Route path="/dailyRecord" element={<DailyRecord />} />
      <Route path="/event" element={<Event />} />
      <Route path="/mainpage" element={<Mainpage  />}/>
      <Route path="/toGraphrecord" element={<GraphRecord  />}/>
      <Route path="/" element={<Homepage />}/>
    </Routes>
    </UserIDContext.Provider>
    </>
  );
}

export default App;
