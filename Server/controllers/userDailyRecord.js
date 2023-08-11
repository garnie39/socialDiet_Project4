import { response,request } from "express";
import bcrypt from "bcrypt";
import DailyRecord from "../models/DailyRecordSchema.js";

const handleNewDailyRecord = async (req,res) => {
    console.log("request.body",req.body, req.session);

    const newDailyRecord ={
        date : req.body.date,
        weight: req.body.weight,
        wellFeel: req.body.wellFeel,
        unwellFeel: req.body.unwellFeel,
        toiletStool: req.body.toiletStool,
        eatCheck: req.body.eatCheck,
        exercise: req.body.exercise,
        alchole: req.body.alchole,
        userID: req.session.user._id,
    };
    console.log("newDailyrecord", newDailyRecord)
    if (!Object.values(newDailyRecord))
    return res.status(422).json({ message: "Missing data input" });

    try {
        await DailyRecord.create(newDailyRecord);
        res.json({ message: "Successfully created", data: newDailyRecord });
      } catch (error) {
        // console.error(error);
        res.status(400).json({ error: "Failed to created ", data: newDailyRecord });
      }
}


const getUserAllDailyRecord = async (req,res) =>{
    // console.log("user data input:", req.params.id, req.body);
    // const _id = req.params.id;
    try{
        const getRecord = await DailyRecord.find({userID: req.session.user._id});
        res.json({data:getRecord})
    }catch(error){
        console.log('getAll record',error)
    }
    
};

export {handleNewDailyRecord, getUserAllDailyRecord}