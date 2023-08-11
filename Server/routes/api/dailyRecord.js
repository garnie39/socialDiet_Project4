import express from "express";
import { handleNewDailyRecord, getUserAllDailyRecord } from "../../controllers/userDailyRecord.js";

const router = express.Router();

router.post("/", handleNewDailyRecord);
router.get("/", getUserAllDailyRecord)
// router
// .route("/:id")
// .get(getUserAllDailyRecord);

export default router;