import { response } from "express";
import db from "../db/database";
import Program from "../models/ProgramSchema";
import connectToMongoDb from "../db/database";

connectToMongoDb("socialDiet");

const handleNewProgram = async (request, response) => {
  const { userId, weight, age, duration, targetWeight } = request.body;

  try {
    const newProgram = await Program.create({
      userId,
      weight,
      age,
      targetWeight,
      duration,
    });
    response.status(201).json({
      message: "Your details successfully added",
      program: newProgram,
    });
  } catch (error) {
    console.error(error);
    response.status(400).json({ error: "Failed to upload your details" });
  }
};

const getAllPrograms = (request, response) => {
  console.log("getAllPrograms", response);
  Program.find()
    .then((program) => {
      response.json({ program: program });
    })
    .catch((error) => {
      console.error("Error fetching programs:", error);
      response
        .status(500)
        .json({ error: "An error occurred while fetching programs" });
    });
};

export { getAllPrograms, handleNewProgram };
