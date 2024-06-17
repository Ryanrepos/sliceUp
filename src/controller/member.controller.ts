import { Request, Response} from "express";

import {T} from "../libs/types/common";

import MemberService from "../model/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
const memberController: T = {};
import Errors from "../libs/Errors";

memberController.signup = async (req: Request, res: Response) => {

    try {
        console.log("signup");
        const input: MemberInput = req.body;
        const memberService = new MemberService();
        const result = await memberService.signup(input);
        // TODO: TOKENS AUTHENTICATION
        res.json({member: result});
    } catch(err) {
        console.log("Error, signup", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
        // res.send(err);
    }
};

memberController.login = async (req: Request, res: Response) => {

    try {
        console.log("login");
        const input: LoginInput = req.body;
        const memberService = new MemberService();
        const result = await memberService.login(input);
        // TODO: TOKENS AUTHENTICATION
        res.send(result);
    } catch(err) {
        console.log("Error, processLogin:", err)
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

// REACT LOYIHA UCHUN


export default memberController;
