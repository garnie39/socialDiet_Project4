import express from "express";
import {
  getAllEvents,
  getEvent,
  handleNewEvent,
  deleteEvent,
  updateEvent,
} from "../controllers/event.js";
// import { getAllEvents } from "../controllers/event";

const router = express.Router();

// get all
router.get("/", getAllEvents);

// get one
router.get("/:id", getEvent);

// create one
router.post("/", handleNewEvent);

// update one
router.patch("/:id", updateEvent);

// delete one
router.delete("/:id", deleteEvent);

export default router;
