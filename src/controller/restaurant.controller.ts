import { Request, Response } from "express";

import { T } from "../libs/types/common";

import MemberService from "../model/Member.service";    // Model logikasi
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { Message } from "../libs/Errors";

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

restaurantController.processSignup = async (req: AdminRequest, res: Response) => {

    try {
        console.log("processSignup");
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);
        // SESSIONS AUTHENTICATION

        req.session.member = result;
        req.session.save(function () {
            res.send(result);
        });

    } catch (err) {
        console.log("Error, processSignup:", err);
        res.send(err);
    }
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {

    try {
        console.log("processLogin");
        console.log("body:", req.body);
        const input: LoginInput = req.body;
        const memberService = new MemberService();
        const result = await memberService.processLogin(input);
        // SESSIONS AUTHENTICATION

        req.session.member = result;
        req.session.save(function () {
            res.send(result);
        });

    } catch (err) {
        console.log("Error, processLogin:", err)
        res.send(err);
    }
};

restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {

    try {

        if (req.session?.member) res.send(`<script> alert(${req.session.member.memberNick}") </script>`);
        else res.send(`<script> alert(${Message.NOT_AUTHENTICATED}") </script>`);
    } catch (err) {
        console.log("Error, checkAuthSession:", err)
        res.send(err);
    }
};

export default restaurantController;
