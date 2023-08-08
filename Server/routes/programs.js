import express from "express";
import { handleNewProgram } from "../controllers/program";

const router = express.Router();

router.post("/", handleNewProgram);

export default router;
