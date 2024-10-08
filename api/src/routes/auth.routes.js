import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

const router = Router();

router.post("/registerUser", registerUser);
router.post("/loginUser", loginUser);

export default router;