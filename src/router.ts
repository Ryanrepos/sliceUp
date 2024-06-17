import express from "express";

const router = express.Router();

import memberController from "./controller/member.controller";

router.post("/login", memberController.login);

router.post("/Signup", memberController.signup);

// REACT loyiha uchun 

export default router;