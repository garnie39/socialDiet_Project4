import commentModel from "../models/CommentSchema.js";
import { request, response } from "express";
import bcrypt from "bcrypt";

const handleNewComment = async (request, response) => {
  if (!request.session.user) {
    response.json({ message: "Please Login to continue" });
    response.status(401);
  } else {
    const comment = new comment({
      eventID: request.body.eventID,
      userID: request.session.user._id,
      username: request.session.user.name,
      comment: request.body.comment,
    });

    try {
      const newComment = await comment.save();
      response.status(201).json(newComment);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }
  console.log("createComment is working");
};

const getEventComment = async (request, response) => {
  try {
    const comments = await commentModel.find({
      eventID: request.params.eventID,
    });
    response.json({ comments });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
  console.log("getComment is working");
};

const deleteComment = async (request, response) => {
  let comment;
  try {
    comment = await commentModel.findById(request.params.id);
    if (comment === null) {
      return response.status(404).json({ message: "Cannot find comment" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
  try {
    await comment.deleteOne();
    response.json({ message: "Comment is deleted" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
  console.log("deleteComment is working");
};

const updateComment = async (request, response) => {
  let com;
  try {
    com = await commentModel.findById(request.params.id);
    if (com === null) {
      return response.status(404).json({ message: "Cannot find comment" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }

  if (request.body.comment != null) {
    com.comment = request.body.comment;
  }
  try {
    const updateComment = await com.save();
    response.json(updateComment);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
  console.log("updateComment is working");
};

export { handleNewComment, getEventComment, deleteComment, updateComment };
