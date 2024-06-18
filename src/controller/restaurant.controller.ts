import { Request, Response } from "express";

import { T } from "../libs/types/common";

import MemberService from "../model/Member.service";    // Model logikasi
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {

    try {
        console.log("goHome");
        res.render("home");
        // Respond turlari:
        // send | json | redirect | end | render
    } catch (err) {
        console.log("Error, goHome:", err)
    }
};

restaurantController.getSingup = (req: Request, res: Response) => {

    try {
        console.log("signup");
        res.render("signup");
    } catch (err) {
        console.log("Error, getSignup:", err)
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {

    try {
        console.log("login");
        res.render("login");
    } catch (err) {
        console.log("Error, getLogin:", err)
    }
};

restaurantController.processSignup = async (req: Request, res: Response) => {

    try {
        console.log("processSignup");
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);
        // TODO: SESSIONS AUTHENTICATION
        res.send(result);
    } catch (err) {
        console.log("Error, processSignup:", err);
        res.send(err);
    }
};

restaurantController.processLogin = async (req: Request, res: Response) => {

    try {
        console.log("processLogin");
        console.log("body:", req.body);
        const input: LoginInput = req.body;
        const memberService = new MemberService();
        const result = await memberService.processLogin(input);
        // TODO: SESSIONS AUTHENTICATION
        res.send(result);
    } catch (err) {
        console.log("Error, processLogin:", err)
        res.send(err);
    }
};

export default restaurantController;
