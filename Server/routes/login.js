import express from "express";
import { handleUserLogin} from "../controllers/userControle.js";

const router = express.Router();

router.post("/", handleUserLogin);

export default router;