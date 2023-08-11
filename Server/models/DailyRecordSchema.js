import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const dailyRecordSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  weight: {
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
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const dailyModel = mongoose.model("dailyRecord", dailyRecordSchema);

export default dailyModel;
