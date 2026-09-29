import Usermodel from "../models/user.model.js";
import {generateToken} from "../utils/token.js"

export const googleAuth = async(req,res)=>{
    try{

    const {name,email}= req.body
    const user = await Usermodel.findOne({email})
    if(!user){
        user = await Usermodel.create({
            name,email
        })
    }
        const token= generateToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        })
    res.status(200).json(user)

    }catch(error){
        res.status(500).json({message:`googleAuth  ${error}`})

    }
}

export const logout = async(req,res)=>{
    try{
       res.clearCookie("token")
       res.status(200).json({message:"Logged out successfully"})
    }
    catch(error){
        res.status(500).json({message:`Error occurred while logging out ${error}`})
    }
}