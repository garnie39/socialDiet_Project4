import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const weightMeasurementSchema = new mongoose.Schema({
  weight: {
    type: Number,
  },
  date: {
    type: Date,
  },
  toiletStool: {
    type: Boolean,
  },
  happyFeel: {
    type: Boolean,
  },
  sadFeel: {
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
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const dailyModel = mongoose.model("dailyRecord", weightMeasurementSchema);

export default dailyModel;
