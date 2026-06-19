import { Router } from "express";
import { getStats } from "../controllers/stats.controller";
import { auth } from "../middleware/auth.middleware";

const router = Router();

router.get("/", auth, getStats);

export default router;