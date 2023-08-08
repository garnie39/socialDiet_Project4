import mongoose from "mongoose";

const Schema = mongoose.Schema;

const activiySchema = new Schema({
  userId: {
    type: String,
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
