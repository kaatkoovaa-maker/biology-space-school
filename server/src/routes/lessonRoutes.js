import { Router } from "express";
import { completeLesson, getLessons } from "../controllers/lessonController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

router.get("/", getLessons);
router.post("/complete", authMiddleware, completeLesson);

export default router;
