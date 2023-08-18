import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const dailyRecordSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  weight: {
    type: Number,
  },
  bodyFat: {
    type: Number,
  },
  wellFeel: {
    type: Boolean,
  },
  unwellFeel: {
    type: Boolean,
  },
  toiletStool: {
    type: Boolean,
    },
  eatCheck: {
    type: Boolean,
  },
  exercise: {
    type: Boolean,
  },
  alchole: {
    type: Boolean,
  },
  note: {
    type: String,
  },
  userID: {
    type: String
   },
});

const dailyModel = mongoose.model("dailyRecord", dailyRecordSchema);

export default dailyModel;
