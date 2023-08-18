import express from "express";
import { handleNewDailyRecord, getUserAllDailyRecord,getUserRecordData } from "../../controllers/userDailyRecord.js";

const router = express.Router();

router.post("/", handleNewDailyRecord);
router.get("/", getUserAllDailyRecord)

router
.route("/:id")
.get(getUserRecordData)


export default router;