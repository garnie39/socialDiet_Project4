//const express = require('express')
//const { ObjectId } = require('mongodb')
import { response } from "express";
//import bcrypt from "bcrypt";

//  import { express } from 'express'
// import pkg from 'express';
// const { express } = pkg;
// import {ObjectId} from 'mongodb'
//const db = require('../db')
//const asyncHandler = require('../middleware/async-handler')
//const UserSchema = require("../models/UserSchema")
import User from '../models/UserSchema.js'

//const router = express.Router()

const handleNewUser = async (request, response) => {
  console.log('request Check',request)
    const { email, password, name ,location} = request.body;
    //filed missing
    if (!name || !email || !password) {
      response.status(400).json({ message: "Missing field" });
      return;
    }
  
    //email duplicate error
    // User.findOne({ email: email }).then(async (user) => {
    //   if (user) {
    //     response.status(400).json({ message: "Email already exist" });
    //     return;
    //   }
    //   //bad password
    //   //password needs to be more than 8 characters
    //    if (password.length < 8) {
    //     response
    //       .status(400)
    //       .json({ message: "Password needs a minimum of  8 characters" });
    //     return;
    //   }
    //   //needs to includes at least one lowercase
    //   if (!/[A-Z]/.test(password)) {
    //     response.status(400).json({
    //       message: "Your password needs at least one uppercase letter.",
    //     });
    //     return;
    //   }
    //   //needs to includes at least one Uppercase
    //    if (!/[a-z]/.test(password)) {
    //     response.status(400).json({
    //       message: "Your password needs at least one lowercase letter.",
    //     });
    //     return;
    //   }
    //   //needs to includes at least one digit
    //   if (!/[0-9]/.test(password)) {
    //     response
    //       .status(400)
    //       .json({ message: "Your password needs at least one number." });
    //     return;
    //   }
  
    //   const hashPassword = bcrypt.hashSync(
    //     request.body.password,
    //     bcrypt.genSaltSync()
    //   );
  
  
      //insert (register) user data into collection "users"
  
      try { 
        // const newUser = await User.create({
        //   name: name,
        //   email: email,
        //   //passwordHash: hashPassword,
        //   password:password,
        //   location:location
        // })
  
        // request.session.email = newUser.email;
        // request.session.name = newUser.name;
        // request.session.user = newUser;
        // response.json({ message: "New account created success", user: newUser});
        const name = req.body.name.trim()
        const email = req.body.email.trim() 
        const password = req.body.password.trim() 
        const location= req.body.location.trim() 
        console.log('controller page user',User)
        const resp = await db().insertOne({...User, name: name, email: email, password: password, location:location})
        //const created = await db().findOne({ _id: new ObjectId(resp.insertedId) })
        res.status(201).json(created)
  
      } catch (error) {
        console.log(error)
        response.status(400).json({ Error: "New account created unknown error"});
      };
    }
    //);
 // };

// get all users
const getAllUsers = (request, response) => {
    User.find()
      .toArray()
      .then((user) => {
        response.json({ users: user });
      });
  };

  // router.get("/", (req, res) => {
  //   userCollection
  //     .find()
  //     .toArray()
  //     .then((response) => {
  //       res.json({ users: response });
  //     });
  // });
  
export { getAllUsers, handleNewUser };
// const userExists = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;
//   const resp = await db().findOne({ _id : new ObjectId(id)})
  
//   if (!resp) {
//     const err = new Error('not found')
//     err.status = 404
//     throw err
//   }
  
//   req.todo = resp
//   next()
// })

// router.post('/', asyncHandler(async (req, res) => {
//   const name = req.body.name.trim()
//   const email = req.body.email.trim()
//   const password = req.body.password.trim()
//   const location = req.body.location.trim()
//   const resp = await db().insertOne({...userSchema, name: name, email: email, password: password,  location: location})
//   const created = await db().findOne({ _id: new ObjectId(resp.insertedId) })
//   res.status(201).json(created)
// }))

// router.get('/', asyncHandler(async (req, res) => {
//   const orderByQuery = {completed: -1, last_updated_at: -1}
//   const resp = await db().find().sort(orderByQuery).toArray()
//   res.json(resp)
// }))

// router.get('/:id', todoExists, asyncHandler(async (req, res) => {
//   res.json(req.todo)
// }))

// router.put('/:id', todoExists, asyncHandler(async (req, res) => {
//   const { todo } = req
//   const { id } = req.params
//   const name = req.body.name?.trim() || todo.name
//   const completed = typeof req.body.completed !== 'boolean' ? todo.completed : req.body.completed
//   const email = req.body.email?.trim() || todo.email

//   const resp = await db().findOneAndUpdate(
//     { _id: new ObjectId(id) }, 
//     {
//       "$set": {
//         name: name, 
//         email: email, 
//         completed: completed,
//         last_updated_at: new Date()
//       }
//     },
//     { includeResultMetadata: true }
//     )
//   if(!resp.ok){ 
//     const err = new Error("There was some error updating the document.");
//     err.status(500)
//     throw err
//   }
//   const updated = await db().findOne({_id: new ObjectId(id)})
//   res.json(updated) 
// }))

// router.delete('/:id', asyncHandler(async (req, res) => {
//   const { id } = req.params
//   await db().deleteOne({_id: new ObjectId(id)})
//   res.status(204).send()
// }))

