import express from 'express'
import { handleLogout } from '../controllers/userControle';



const router = express.Router();

router.delete("/", handleLogout);

export default router;