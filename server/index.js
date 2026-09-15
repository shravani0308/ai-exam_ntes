
import express from "express";
import dotenv from "dotenv"
import dbConnect from "./db.js";
import authRoute from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
console.log("port running connected to env")



const app =express();
app.use(cors(
 { origin:" http://localhost:5173",
credentials:true,
methods:["GET","POST","PUT","DELETE","OPTIONS"]

 }
))

app.use(express.json());
app.use(cookieParser())

const PORT = process.env.PORT || 8080

app.get("/",(req,res)=>{
    res.send("backend running")
})


app.use("/api/auth",authRoute);
console.log("auth route")
app.use("/api/user",userRouter);
console.log("user route")

app.listen(PORT,()=>{
  console.log("server listing port")
  dbConnect()

})