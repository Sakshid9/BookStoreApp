import express from "express";
import { sendMessage } from "../controller/contact.controller.js";

const router = express.Router();

// The "/" here combines with "/contact" in index.js 
// to make the full path: http://localhost:4001/contact
router.post("/", sendMessage);

export default router;