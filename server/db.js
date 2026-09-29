import mongoose from "mongoose"
const dbConnect =async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/examai')
        console.log("mongodb connected")
    }catch(error){
     console.log("db error",error)
    }
}

export default dbConnect;
