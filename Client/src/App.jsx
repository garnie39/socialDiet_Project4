import React ,{useState, useEffect, useContext} from 'react'
import './App.css'
import UserRegister from './Components/UserRegister'
import DailyRecord from './Components/DailyRecord'
import {Routes, Route} from 'react-router-dom'
import UserLogin from './Components/UserLogin'
import Mainpage from './Components/Mainpage'
import Homepage from './Components/Homepage'
import GraphRecord from './Components/GraphRecord'



function App() {
 
  //const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [userLoginDetailId, setUserLoginDetailId] =useState({
    name:'',
    email:'',
    _id:''
  })


  // const handleUserLoginResponse = (data) => {
  //   setUserLoginDetailId({
  //     name: data.name,
  //     email: data.email,
  //     _id: data._id
  //   })
  //   //check user authenticafation (if false show login opage / if true show main page)
  //   // setIsAuthenticated(true)
  // }
  // console.log('userLoginDetail check',userLoginDetailId)
  // console.log('userLoginDetail check',userLoginDetailId)

  // const setAuth = (value) => {
  //   setIsAuthenticated(value);
  // };

  // useEffect(()=>{
  
  // }, []);


  return (
    <>
    {/* <UserIDContext.Provider value={{ userLoginDetailId, setUserLoginDetailId }} > */}
    <Routes>
    {/* <Route path="/" element={isAuthenticated === true? <Mainpage />:<UserLogin />}/> */}
      <Route path="/userLogin" element={<UserLogin />} />
      <Route path="/toUserRegister" element={<UserRegister />} />
      <Route path="/dailyRecord" element={<DailyRecord />} />
      <Route path="/mainpage" element={<Mainpage  />}/>
      <Route path="/toGraphrecord" element={<GraphRecord  />}/>
      <Route path="/" element={<Homepage />}/>
    </Routes>
    {/* </UserIDContext.Provider> */}
    </>
  )
}

export default App
