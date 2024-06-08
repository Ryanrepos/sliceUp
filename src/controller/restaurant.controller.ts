import { Request, Response} from "express";

import {T} from "../libs/types/common";

import MemberService from "../model/Member.service";    // Model logikasi

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {

    try {
        console.log("goHome");
        res.send("Home page");
    } catch(err) {
        console.log("Error, goHome:", err)
    }
};


restaurantController.getLogin = (req: Request, res: Response) => {

    try {
        console.log("getLogin");
        res.send("Login page");
    } catch(err) {
        console.log("Error, getLogin:", err)
    }
};


restaurantController.getSingup = (req: Request, res: Response) => {

    try {
        console.log("getSignup");
        res.send("Signup page");
    } catch(err) {
        console.log("Error, getSignup:", err)
    }
};

export default restaurantController;
