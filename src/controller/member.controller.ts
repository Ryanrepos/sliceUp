import { Request, Response} from "express";

import {T} from "../libs/types/common";

import MemberService from "../model/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import AuthService from "../model/Auth.service";
import { AUTH_TIMER } from "../libs/config";

// Service modeldan instance olyabmiz
const memberService = new MemberService();
const authService = new AuthService();

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {

    try {
        console.log("signup");
        const input: MemberInput = req.body;

        // Call MemberService to sign up a new member
        const result = await memberService.signup(input);

        // Generate a token for the signed up member
        const token = await authService.createToken(result)

        // Cookie Timer
        res.cookie("accessToken", token, { maxAge: AUTH_TIMER * 3600 * 1000,
            httpOnly: false,
            });
            
        // Respond with the signed up member and token
        res.status(HttpCode.CREATED).json({ member: result, accessToken: token });
    } catch(err) {
        console.log("Error, signup", err);

        // Handle specific errors or respond with a standard error
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
        // res.send(err);
    }
};

memberController.login = async (req: Request, res: Response) => {

    try {
        console.log("login");
        const input: LoginInput = req.body;

        // Call MemberService to authenticate the login
        const result = await memberService.login(input);

        // Generate a token for the logged-in member
        const token = await authService.createToken(result);

        // Cookie Timer
        res.cookie("accessToken", token, { maxAge: AUTH_TIMER * 3600 * 1000,
        httpOnly: false,
        });
        
        // Respond with the logged-in member and token
        res.status(HttpCode.OK).json({ member: result, accessToken: token });
    } catch(err) {
        console.log("Error, login:", err)
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

memberController.verifyAuth = async (req: Request, res: Response) => {

    try {
        let member = null;
        const token = req.cookies["accessToken"];

        if(token) member = await authService.checkAuth(token);

        if(!member) 
            throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);

        res.status(HttpCode.OK).json({ member: member});

    } catch(err) {
        console.log("Error, verifyAuth:", err)
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};


// REACT LOYIHA UCHUN


export default memberController;
