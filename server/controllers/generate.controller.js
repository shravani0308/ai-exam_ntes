import { response } from "express";
import userModel from "../models/user.model";
import { generateGeminiResponse } from "../services/gemini.services";
import { buildPrompt } from "../utils/promptBuilder";
import Notes from "../../client/src/pages/Notes";

export const generateNotes =async(req,res)=>{
    try{
        const {
            topic,
           classLevel,
           examType,
           revisionMode= false,
           includeDiagram= false,
            includeChart= false
  }= req.body();
  if(!topic){
  return  res.status(400).json({message:"Topic is required"})
  }
  const user = await userModel.findById(req.userId)
   if(!user){
  return  res.status(400).json({message:"user not found"})
  }

  if(user.credits>10){
    user.isCreditAvaliable = false
    await user.save()
    return res.status(403).json({message:"Insufficient credits"})
  }
  const prompt= buildPrompt({
     topic,
           classLevel,
           examType,
           revisionMode,
           includeDiagram,
            includeChart

  }) 
   const aiResponse =  generateGeminiResponse(prompt)
   const notes = await Notes.create({
    user:user._id,
     topic,
           classLevel,
           examType,
           revisionMode,
           includeDiagram,
            includeChart,
            content:aiResponse

   })

    }catch(error){

    }
}