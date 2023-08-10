// import React from 'react';
// import ReactDOM from 'react-dom';
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
<<<<<<< HEAD
//   passwordHash: {
//     type: String,
//   },
//   DOB: {
//     type: Date,
//   },
=======
  DOB: {
    type: Date,
  },
>>>>>>> daily_record_part
  location: {
    type: String,
  },
});

//Converting from commonJS to ESM
const userModel = mongoose.model("User", userSchema);

export default userModel;