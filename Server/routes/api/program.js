import express from "express";
import { getAllPrograms } from "../../controllers/program";

const router = express.Router();

router.route("/").get(getAllPrograms);
router.get("/", getAllPrograms);

export default router;
