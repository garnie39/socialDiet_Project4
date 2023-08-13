import React, { useState, useEffect, useContext, createContext} from 'react';
import axios from 'axios'
import Mainpage from './Mainpage';
import { useNavigate } from "react-router-dom"

const UserIDContext = createContext();

export const useSomeCtx = () => useContext(UserIDContext);


// export const useSomeCtxState = () => {
//     const [state] = useContext(UserIDContext);
//     return state;
// };


function UserLogin() {

    const history =useNavigate()
    

    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userLoginDetail, setUserLoginDetail] =useState({
        email:'',
        password:'',
        _id:''
    })

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
                        })
                        .catch((error) => {
                        console.log('user login error',error);
                })
                console.log("res.data on login:", response.data);
                setUserLoginDetail(response.data)
            
                //user login success redirect to mianpage
                history("/mainpage")

            })
            .catch((error) => {
              console.log('user login error',error);
    })
}

console.log('hello',userLoginDetail)
    // const handleChange = (event) =>{
    //     const {name,value} =event.target
    //     setUserLoginDetail({
    //         ...userLoginDetail,
    //         [name]:value
    //     })
    //     console.log(userLoginDetail)
    // }

  return (
    <UserIDContext.Provider value={{ userLoginDetail, setUserLoginDetail }} >
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
        {/* {isAuthenticated === true? <Mainpage />:<UserLogin />} */}
        {/* <p>needs to fix if user logged in going to mainpage</p>
        <button><a href='/mainpage'>MAIN page</a></button> */}
    </div>
    </UserIDContext.Provider>
  )
}

export default UserLogin


