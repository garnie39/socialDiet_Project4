import { response, request } from "express";
import bcrypt from "bcrypt";
import DailyRecord from "../models/DailyRecordSchema.js";

const handleNewDailyRecord = async (request, response) => {
  console.log("request.body", request.body, request.session);

  const newDailyRecord = {
    date: request.body.date,
    weight: request.body.weight,
    wellFeel: request.body.wellFeel,
    unwellFeel: request.body.unwellFeel,
    toiletStool: request.body.toiletStool,
    eatCheck: request.body.eatCheck,
    exercise: request.body.exercise,
    alchole: request.body.alchole,
    userID: request.session.user._id,
  };
  console.log("newDailyrecord", newDailyRecord);
  if (!Object.values(newDailyRecord))
    return response.status(422).json({ message: "Missing data input" });

  try {
    await DailyRecord.create(newDailyRecord);
    response.json({ message: "Successfully created", data: newDailyRecord });
  } catch (error) {
    // console.error(error);
    response
      .status(400)
      .json({ error: "Failed to created ", data: newDailyRecord });
  }
};

const getUserAllDailyRecord = async (request, response) => {
  // console.log("user data input:", request.params.id, request.body);
  // const _id = request.params.id;
  try {
    const getRecord = await DailyRecord.find({
      userID: request.session.user._id,
    });
    response.json({ data: getRecord });
  } catch (error) {
    console.log("getAll record", error);
  }
};

export { handleNewDailyRecord, getUserAllDailyRecord };
