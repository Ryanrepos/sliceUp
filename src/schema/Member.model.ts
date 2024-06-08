import mongoose, {Schema} from "mongoose";
import { MemberType, MemberStatus } from "../libs/enums/member.enum";

// ** Schema ni 2 xil usulda qurish mumkin:
// 1. Schema first => schema orqali 
// 2. Code first => code orqali

const memberSchema = new Schema({
    memberType: {
        type: String,
        enum: MemberType,
        default: MemberType.USER
    }, 
    memberStatus: {
        type: String,
        enum: MemberStatus,
        default: MemberStatus.ACTIVE
    },

    memberNick: {
        type: String,
        index: {unique: true, sparse: true},
        required: true
    },
    memberPhone: {
        type: String,
        index: {unique: true, sparse: true},
        required: true
    },
    memberPassword: {
        type: String,
        select: false,
        required: true
    },
    memberAddress: {
        type: String,
    },
    memberDesc: {
        type: String,
    },
    memberImage: {
        type: String,
    }, 
    memberPoints: {
        type: Number,
        default: 0
    }
},
    {timestamps: true}  // timestaps - database da createdAt va updatedAt ma'lumotlarni qo'yib beradi.
);

export default mongoose.model("Member", memberSchema);