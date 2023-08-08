import mongoose from "mongoose";

const Schema = mongoose.Schema;

const programSchema = new Schema({
  userId: {
    type: String,
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
