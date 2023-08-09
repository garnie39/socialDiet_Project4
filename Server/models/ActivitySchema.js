import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const activiySchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  user: {
    type: String,
  },
  invitation: {
    type: String,
  },
  date: {
    type: Date,
  },
  time: {
    type: Object,
  },
  location: {
    type: String,
  },
  activityType: {
    type: String,
  },
  comment: {
    type: String,
  },
});

const activityModel = mongoose.model("activity", activiySchema);

export default activityModel;