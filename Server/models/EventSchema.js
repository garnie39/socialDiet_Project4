import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const commentSchema = new mongoose.Schema({
  user: String,
  comment: String,
  // createdAt: Date,
});

const eventSchema = new mongoose.Schema({
  // userID: {
  //   type: mongoose.SchemaTypes.ObjectId,
  //   required: true,
  // },
  join: {
    type: Boolean,
  },
  // userJoin: {
  //   type: mongoose.SchemaTypes.ObjectId,
  //   ref: "Users",
  // },
  // date: {
  //   type: Date,
  // },
  time: {
    type: Object,
  },
  location: {
    type: addressSchema,
  },
  eventType: {
    type: String,
  },
  comment: {
    type: [commentSchema],
  },
});

const eventModel = mongoose.model("events", eventSchema);

export default eventModel;
