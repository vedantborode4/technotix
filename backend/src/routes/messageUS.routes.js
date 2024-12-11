import { messageInfo } from "../controllers/messageUs.controller.js";
import { Router } from "express";

const router = Router()

router.route("/messageUs").post(messageInfo)

export default router