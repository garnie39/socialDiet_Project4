import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const programSchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  weigth: {
    type: Number,
  },
  age: {
    type: Number,
  },
  targetWeight: {
    type: Number,
  },
  duration: {
    type: Date,
  },
});

const programModel = mongoose.model("program", programSchema);

export default programModel;