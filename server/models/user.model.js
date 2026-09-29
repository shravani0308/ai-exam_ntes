import mongoose from "mongoose";
import { type } from "node:os";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    credits:{
        type:Number,
        default:50,
        min:0
    },
    isCreditAvaliable:{
        type:Boolean,
        default:true
    },
    notes:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Notes",
        default:[]
    }

},{timestamps:true})

const userModel = mongoose.model("usermodel",userSchema)

export default userModel;