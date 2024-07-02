
// Modellar controller lar bilan to'gridan to'gri ishlaydi 
// Modellar database bilan schema modellar orqali bog'lanadi va amallar bajaradi ekan.

import MemberModel from "../schema/Member.model";
import { LoginInput, Member, MemberInput, MemberUpdateInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs";
import { shapeIntoMongooseObjectId } from "../libs/config";

class MemberService {
    private readonly memberModel;
    constructor() {
        this.memberModel = MemberModel;
    }

    //📌📌📌📌📌📌📌📌📌📌📌 SPA 📌📌📌📌📌📌📌📌📌📌📌

    public async signup(input: MemberInput): Promise<Member> {
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result.toJSON();
        } catch (err) {
            console.error("Error, model: signup", err);

            throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
        }
    }

    public async login(input: LoginInput): Promise<Member> {
        const member = await this.memberModel.findOne({ memberNick: input.memberNick, memberStatus: { $ne: MemberStatus.DELETE }, }, { memberNick: 1, memberPassword: 1 })
            .exec();

        if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

        else if (member.memberStatus === MemberStatus.BLOCK) {
            throw new Errors(HttpCode.FORBITTEN, Message.BLOCKED_USER);
        }

        const isMatch = await bcrypt.compare(input.memberPassword, member.memberPassword);

        // const isMatch = input.memberPassword === member.memberPassword;
        console.log("isMatch:", isMatch);

        if (!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }

        return await this.memberModel.findById(member._id).lean().exec()

    }

    //📌📌📌📌📌📌📌📌📌📌📌 SSR 📌📌📌📌📌📌📌📌📌📌📌

    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel.findOne({ memberType: MemberType.RESTAURANT }).exec();
        console.log("exist:", exist);

        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

        // *** HASHING PASSWORDS ***

        console.log("before:", input.memberPassword);

        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
        console.log("after:", input.memberPassword);


        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result;
        } catch (err) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }

    public async processLogin(input: LoginInput): Promise<Member> {
        const member = await this.memberModel.findOne({ memberNick: input.memberNick }, { memberNick: 1, memberPassword: 1 })
            .exec();

        if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

        const isMatch = await bcrypt.compare(input.memberPassword, member.memberPassword);

        // const isMatch = input.memberPassword === member.memberPassword;
        console.log("isMatch:", isMatch);

        if (!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }

        return await this.memberModel.findById(member._id).exec()

    }

    public async getUsers(): Promise<Member[]> {
        const result = await this.memberModel.find({ memberType: MemberType.USER }).exec();

        if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

        return result;
    }

    public async updateChosenUser(input: MemberUpdateInput): Promise<Member> {
        input._id = shapeIntoMongooseObjectId(input._id);
        const result = await this.memberModel.findByIdAndUpdate({ _id: input._id }, input, { new: true }).exec();

        if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

        return result;
    }

}

export default MemberService;