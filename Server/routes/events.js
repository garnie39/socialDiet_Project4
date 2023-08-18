import express from "express";
import {
  getAllEvents,
  getEvent,
  handleNewEvent,
  deleteEvent,
  updateEvent,
  getUserEvent,
} from "../controllers/event.js";

const router = express.Router();

// get all
router.get("/", getAllEvents);

// get all user's event
router.get("/:userID", getUserEvent);

// get one
router.get("/page/:id", getEvent);

// create one
router.post("/", handleNewEvent);

// update one
router.patch("/:id", updateEvent);

// delete one
router.delete("/:id", deleteEvent);

export default router;
