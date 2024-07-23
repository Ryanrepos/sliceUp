import { NextFunction, Request, Response} from "express";

import {T} from "../libs/types/common";

import MemberService from "../model/Member.service";
import { ExtendedRequest, LoginInput, Member, MemberInput, MemberUpdateInput } from "../libs/types/member";
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

memberController.logout = async (req: ExtendedRequest, res: Response) => {
    try {
        console.log("logout");
        res.cookie("accessToken", null, { maxAge: 0, httpOnly: true });
        res.status(HttpCode.OK).json({ logout: true });
    } catch(err) {
        console.log("Error, logout:", err)
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

memberController.getMemberDetail = async (req: ExtendedRequest, res: Response) => {
    try {
        console.log("getMemberDetail");
        const result = await memberService.getMemberDetail(req.member);

        res.status(HttpCode.OK).json(result);
        
    } catch(err) {
        console.log("Error, getMemberDetail:", err)
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

memberController.updateMember = async (req: ExtendedRequest, res: Response) => {
    try {
        console.log("updateMember");
        const input: MemberUpdateInput = req.body;
        if(req.file) input.memberImage = req.file.path;
        const result = await memberService.updateMember(req.member, input);

        res.status(HttpCode.OK).json(result);
        
    } catch(err) {
        console.log("Error, updateMember:", err)
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

memberController.verifyAuth = async (req: ExtendedRequest, res: Response, next: NextFunction) => {

    try {
        const token = req.cookies["accessToken"];

        if(token) req.member = await authService.checkAuth(token);

        if(!req.member) 
            throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);

        next();
        // res.send
    } catch(err) {
        console.log("Error, verifyAuth:", err)
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

memberController.retrieveAuth = async (req: ExtendedRequest, res: Response, next: NextFunction) => {

    try {
        const token = req.cookies["accessToken"];

        if(token) req.member = await authService.checkAuth(token);

        next();
    } catch(err) {
        console.log("Error, retrieveAuth:", err)
        next();
    }
};


// REACT LOYIHA UCHUN


export default memberController;
