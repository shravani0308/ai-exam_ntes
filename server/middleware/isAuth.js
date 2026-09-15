import jwt from "jsonwebtoken";

export const isAuth = async(req,res,next)=>{
    try{
        const {token}= req.cookies
        if(!token){
            return res.status(401).json({message:"token not found"})
        }
        const  verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        if(!verifyToken){
            return res.status(401).json({message:"user does not have vaid token"})
        }
        req.userId =verifyToken.userId
        next()

    }catch(error){
        return res.status(500).json({message:`internal server error ${error}`})
    }
}
export default isAuth;