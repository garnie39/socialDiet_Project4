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
