import mongoose from "mongoose";
const Schema = mongoose.Schema;

const dailyRecordSchema = new Schema({
  userId: {
    type: String,
  },
  weightMeasurement: {
    type: Number,
  },
  Date: {
    type: Date,
  },
  breakfast: {
    type: String,
  },
  breakfastCal: {
    type: Number,
  },
  lunch: {
    type: String,
  },
  lunchCal: {
    type: Number,
  },
  dinner: {
    type: String,
  },
  dinnerCal: {
    type: Number,
  },
  totalCal: {
    type: Number,
  },
});

const dailyRecordModel = mongoose.model("dailyRecord", dailyRecordSchema);

export default dailyRecordModel;
