import { response } from "express";
import bcrypt from "bcrypt";
import db from '../db/database.js'
import User from '../models/UserSchema.js'
import connectToMongoDb from '../db/database.js'
import session from 'express-session'


const handleUserLogin = (request,response) =>{
console.log('handleUserLogin',request.bosy)
const {email ,password} = request.body;
  //filed missing
  if (!email || !password) {
    response.status(400).json({ message: "Missing Email or Password" });
    return;
  }
  User.findOne({ email: email }).then((user) => {
    if (user) {
      //setAuth(user);
      const isValidPassword = bcrypt.compareSync(password, user.password);

      if (isValidPassword) {
      response.json({
        message: "Logged in Successfully",
        isAuthenticated: true,
        name: user.name,
        email: user.email,
      });
    } else {
      response.status(401).json({ message: "Incorrect password" });
    }
  } else {
    response.status(401).json({ message: "User could not be found" });
  }
      
    })
  }



  //Logout

//Logout
const handleLogout = (req, res) => {
  req.session.destroy();
  return res.json({
    message: "Logout success",
    isAuthenticated: false,
  });
};
export {handleUserLogin,handleLogout};