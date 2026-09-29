import mongoose from "mongoose";
import { type } from "node:os";

const notesSchema = new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserModel",
        required:true
    },
    topic:{
        type:String,
        required:true,
        
    },
    classLevel :String,
    examType:String,
    revisionMode:{
        type:Boolean,
        default:false
    },
    includeDiagram:String,
    includeChart:String,
    
    content:{
        type:mongoose.Schema.Types.Mixed, //ai respone(string/json)
        require:true
    }

},{timestamps:true})

const notesModel = mongoose.model("Notes",notesSchema)

export default notesModel;