import Event from "../models/EventSchema.js";
import { request, response } from "express";
import bcrypt from "bcrypt"

const handleNewEvent = async (request, response) => {
  const event = new Event({
    userID: request.session.user._id,
    join: request.body.join,
    userJoin: request.body.userJoin,
    date: request.body.date,
    time: request.body.time,
    location: request.body.location,
    eventType: request.body.eventType,
    comment: request.body.comment,
  });
  //create one
  try {
    const newEvent = await event.save();
    response.status(201).json(newEvent);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
  console.log("createEvent is working");
};

// get all
const getAllEvents = async (request, response) => {
  try {
    const events = await Event.find();
    response.json(events);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
  console.log("getAllEvents is working");
};

// get user events
const getUserEvent = async (request, response) => {
  try {
    const events = await Event.find({userID: request.session.user._id || userJoin: request.session.user._id})
    response.json({events})
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

// get one
const getEvent = async (request, response) => {
  let event;
  try {
    event = await Event.findById(request.params.id);
    if (event === null) {
      return response.status(404).json({ message: "Cannot find event" });
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
  response.json(event);
  console.log("getEvent is working");
};

// delete
const deleteEvent = async (request, response) => {
  let event;
  try {
    event = await Event.findById(request.params.id);
    if (event === null) {
      return response.status(404).json({ message: "Cannot find event" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
  try {
    await event.deleteOne();
    response.json({ message: "Event is deleted" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
  console.log("deleteEvent is working");
};

// update
const updateEvent = async (request, response) => {
  let event;
  try {
    event = await Event.findById(request.params.id);
    if (event === null) {
      return response.status(404).json({ message: "Cannot find event" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }

  if (request.body.join != null) {
    event.join = request.body.join;
  }
  if (request.body.time != null) {
    event.time = request.body.time;
  }
  if (request.body.location != null) {
    event.location = request.body.location;
  }
  if (request.body.eventType != null) {
    event.eventType = request.body.eventType;
  }

  try {
    const updateTheEvent = await event.save();
    console.log("Event is updated");
    response.json(updateTheEvent);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
  console.log("updateEvent is working");
};

export { handleNewEvent, getAllEvents, getEvent, deleteEvent, updateEvent, getUserEvent };
