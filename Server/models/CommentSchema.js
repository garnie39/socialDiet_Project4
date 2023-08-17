import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const commentSchema = new mongoose.Schema({
  eventID: {
    type: String,
  },
  userID: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  username: {
    type: String,
  },
  comment: {
    type: String,
  },
});

const commentModel = mongoose.model("comments", commentSchema);

export default commentModel;
