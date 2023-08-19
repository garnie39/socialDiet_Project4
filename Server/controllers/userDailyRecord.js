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
    bodyFat,
    wellFeel,
    unwellFeel,
    toiletStool,
    eatCheck,
    exercise,
    alchole,
    note,
  } = request.body;

  const newDailyRecord = {
    date,
    weight,
    bodyFat,
    wellFeel,
    unwellFeel,
    toiletStool,
    eatCheck,
    exercise,
    alchole,
    note,
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

// get all
const getUserAllDailyRecord = async (request, response) => {
  // console.log("getUserAllDailyRecord", request.session.user._id);
  try {
    const getRecord = await DailyRecord.find();
    response.json({ data: getRecord });
  } catch (error) {
    console.log("getAll record", error);
  }
};

// get user records
const getUserRecordData = async (request, response) => {
  console.log("specific user data record get:", request.params.id, request);
  try {
    const getData = await DailyRecord.find({ userID: request.params.id });
    response.json({ data: getData });
  } catch (error) {
    console.log("get user record data:", error);
  }
};

const handleEditDailyRecord = async (request, response) => {
  console.log("edit data input:", request.params.id, request.body);

  const _id = request.params.id;

  const updateData = {
    date: request.body.date ?? undefined,
    weight: request.body.weight ?? undefined,
    bodyFat: request.body.bodyFat ?? undefined,
    wellFeel: request.body.wellFeel ?? undefined,
    unwellFeel: request.body.unwellFeel ?? undefined,
    toiletStool: request.body.toiletStool ?? undefined,
    eatCheck: request.body.eatCheck ?? undefined,
    exercise: request.body.exercise ?? undefined,
    alchole: request.body.alchole ?? undefined,
    note: request.body.note ?? undefined,
  };

  try {
    const updatedDailyRecords = await DailyRecord.findByIdAndUpdate(
      _id,
      updateData,
      {
        new: true,
      }
    );

    if (!updatedDailyRecords)
      return response
        .status(400)
        .json({ error: "Record did not update", data: updateData });

    response.json({ message: "Successfully created", data: updateData });
  } catch (error) {
    response
      .status(400)
      .json({ error: "Failed to created ", data: updateData });
  }
  try {
    const updated = await updateData.save();
    console.log("Record is updated");
    response.json(update);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
  console.log("updaterecord is working");
};

export {
  handleNewDailyRecord,
  getUserAllDailyRecord,
  getUserRecordData,
  handleEditDailyRecord,
};
