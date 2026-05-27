import { Router } from "express";
import { createUser } from "../controller/user.controller.js";
import { chat } from "../controller/chat.controller.js";
const router = Router();

router.post("/user", createUser);
router.post("/chat", chat);
export default router;
