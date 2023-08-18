import React, { useState, useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


function UserRegister() {
    
    const history =useNavigate();
    
    const [errorMessage, setErrorMessage] =useState();
    const [newFormDetails,setNewFormDetails] =useState({
        name:"",
        email:"",
        password:"",
        location:"",
        dob:""
    })
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const fields = Object.fromEntries(formData);
        console.log('feild check',fields);


        axios.post("/api/register", fields)
            .then((response)=> {
                //console.log('register api return',response)
                const nameDataGet=response.config.data
                const parsedData = JSON.parse(nameDataGet);
                const nameData = parsedData.name;
                console.log('check1234',nameData)
                
                history("/")

            }).catch((error ) =>{
                console.log('error', error.response.data);
                setErrorMessage(error.response.data.message)
            });
            // responseet the form fields after submission
            setNewFormDetails({
                name:"",
                email:"",
                password:"",
                location:"",
                dob:""
            });
    };
        const handleChange=(event) =>{
            const {name, value} =event.target;
            setNewFormDetails({
                ...newFormDetails,
                [name]:value,
            })
        }
        
    // const [commentLength,setCommentLength] =useState(0)
    // const handleCommentLength=(num)=>{
    //     setCommentLength(num)
    //     console.log(num)
    // }
    
    
    
      return (
        <>
        <div className="register-form">
        <form onSubmit={handleSubmit}>
            <h1>Your Details</h1>
            {errorMessage === ''? '':<h2 style={{color:'red'}}>{errorMessage}</h2>}
            <FloatingLabel controlId="floatingName" label="Name">
                <Form.Control type="text" placeholder="Name" style={{ width: '300px' }} name="name" 
                onChange={handleChange}  value={newFormDetails.name} required/>
            </FloatingLabel>
            <br/>
       

            <FloatingLabel controlId="floatingEmail" label="Email addresponses" className="mb-3">
                <Form.Control type="email" placeholder="email@example.com" style={{ width: '300px' }} name='email'   
                onChange={handleChange} value={newFormDetails.email} required/>
            </FloatingLabel>
            <br/>


            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="more than 8 chalacters" style={{ width: '300px' }} name='password'  
                onChange={handleChange} value={newFormDetails.password} required />
            </FloatingLabel>
            <br/>

            <FloatingLabel controlId="floatingLocation" label="Location">
                <Form.Control type="text" placeholder="location" style={{ width: '300px' }} name="location"  
                onChange={handleChange}  value={newFormDetails.location} required/>
            </FloatingLabel>
            <br/>

            <FloatingLabel controlId="floatingDOB" label="DOB">
                <Form.Control type="date" placeholder="DOB" style={{ width: '300px' }} name="dob"  
                onChange={handleChange}  value={newFormDetails.dob} required/>
            </FloatingLabel>


             <input type="submit"></input>
            <div className='login-page'>
                <p>Already have account?</p>
                <button><a href='/userLogin'>Login</a></button>
            </div> 
           <hr/>
           </form>
        </div>
        </>
      );
}

export default UserRegister





