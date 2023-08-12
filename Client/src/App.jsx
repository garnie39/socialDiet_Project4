import React ,{useState, useEffect, useContext,createContext} from 'react'
import './App.css'
import UserRegister from './Components/UserRegister'
import DailyRecord from './Components/DailyRecord'
import {Routes, Route} from 'react-router-dom'
import UserLogin from './Components/UserLogin'
import Mainpage from './Components/Mainpage'
import Homepage from './Components/Homepage'

const UserIDContext = React.createContext([]);

function App() {

  //const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [userLoginDetailId, setUserLoginDetailId] =useState({
    name:'',
    email:'',
    _id:''
  })
console.log('userLoginDetail check',userLoginDetailId)

  // const handleUserLoginResponse = (data) => {
  //   setUserLoginDetailId({
  //     name: data.user.name,
  //     email: data.user.email,
  //     _id: data.user._id
  //   })
  //   //check user authenticafation (if false show login opage / if true show main page)
  //   setIsAuthenticated(true)
  // }
  // console.log('userLoginDetail check',userLoginDetailId)

  // const setAuth = (value) => {
  //   setIsAuthenticated(value);
  // };

  // useEffect(()=>{
  //  handleUserLoginResponse();
  // }, [isAuthenticated]);


  return (
    <>
    <UserIDContext.Provider value={userLoginDetailId} >
    <Routes>
    {/* <Route path="/" element={isAuthenticated === true? <Mainpage />:<UserLogin />}/> */}
      <Route path="/userLogin" element={<UserLogin setUserLoginDetailId={setUserLoginDetailId}/>} />
      <Route path="/toUserRegister" element={<UserRegister />} />
      <Route path="/dailyRecord" element={<DailyRecord />} />
      <Route path="/mainpage" element={<Mainpage  />}/>
      <Route path="/" element={<Homepage />}/>
    </Routes>
    </UserIDContext.Provider>
    </>
  )
}

export default App
