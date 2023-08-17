import express from "express";
import {
  handleNewComment,
  getEventComment,
  deleteComment,
  updateComment,
} from "../controllers/comment.js";

const router = express.Router();

router.get("/:eventID", getEventComment);
router.post("/", handleNewComment);
router.patch("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;
