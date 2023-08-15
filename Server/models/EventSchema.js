import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const eventSchema = new mongoose.Schema({
  userID: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  // userJoin: {
  //   type: String,
  //   ref: "Users",
  // },
  date: {
    type: Date,
  },
  time: {
    type: Object,
  },
  location: {
    type: {
      locationName: { type: String },
      street: { type: String },
      city: { type: String },
    },
  },
  eventType: {
    type: String,
  },
  // comment: {
  //   type: [
  //     {
  //       user: { type: String },
  //       comment: { type: String },
  //       createdAt: { type: Date },
  //     },
  //   ],
  // },
});

const eventModel = mongoose.model("events", eventSchema);

export default eventModel;
