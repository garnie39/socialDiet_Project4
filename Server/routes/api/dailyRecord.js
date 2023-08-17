import express from "express";
import { handleNewDailyRecord, getUserAllDailyRecord, getUserRecordData, handleEditDailyRecord } from "../../controllers/userDailyRecord.js";

const router = express.Router();

router.post("/", handleNewDailyRecord);
router.get("/", getUserAllDailyRecord)

router
.route("/:id")
.get(getUserRecordData)
.patch(handleEditDailyRecord)

export default router;