import { response, request } from "express";
import bcrypt from "bcrypt";
import DailyRecord from "../models/DailyRecordSchema.js";
import session from "express-session";
import mongoose from "mongoose";

const handleNewDailyRecord = async (request, response) => {
  console.log("requestuest.body", request.body, request.session);
  const {
    date,
    weight,
    wellFeel,
    unwellFeel,
    toiletStool,
    eatCheck,
    exercise,
    alchole,
  } = request.body;

  const newDailyRecord = {
    date,
    weight,
    wellFeel,
    unwellFeel,
    toiletStool,
    eatCheck,
    exercise,
    alchole,
    userID: request.session.user._id,
    //_id: new mongoose.Types.ObjectId(request.session.user._id)
  };

  console.log("newDailyrecord", newDailyRecord);

  if (!Object.values(newDailyRecord))
    return response.status(422).json({ message: "Missing data input" });

  try {
    await DailyRecord.create(newDailyRecord);
    return response.json({
      message: "Successfully created",
      data: newDailyRecord,
    });
  } catch (error) {
    return response
      .status(400)
      .json({ error: "Failed to created ", data: newDailyRecord });
  }
};

const getUserAllDailyRecord = async (request, response) => {
  // console.log("user data input:", request.params.id, request.body);
  // const _id = request.params.id;
  console.log("getUserAllDailyRecord", request.session.user._id);
  try {
    const getRecord = await DailyRecord.find();
    response.json({ data: getRecord });
  } catch (error) {
    console.log("getAll record", error);
  }
};

const getUserRecordData = async (request, response) => {
  console.log("specific user data record get:", request.params.id, request);
  try {
    const getData = await DailyRecord.find({ userID: request.params.id });
    response.json({ message: "check Data", data: getData });
  } catch (error) {
    console.log("get user record data:", error);
  }
};

export { handleNewDailyRecord, getUserAllDailyRecord, getUserRecordData };
