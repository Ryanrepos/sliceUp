import express from "express";

const router = express.Router();

import memberController from "./controller/member.controller";

router.get("/", memberController.goHome);

router.get("/login", memberController.getLogin);


router.get("/Signup", memberController.getSingup);

export default router;