import { Router } from "express";
import { getAdminData } from "../controllers/admin.controller";
import { auth } from "../middleware/auth.middleware";

const router = Router();

router.get("/users", auth, getAdminData);

export default router;