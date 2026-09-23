import { motion } from "motion/react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"



export default function Notes() {
  const navigate = useNavigate()
   const {userData}=useSelector((state)=>state.user)
    const credits = userData.credits
  return (
   
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-8">
       <motion.header
      initial ={{opacity:0,y:-15}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5}}
      
      className="mb-10
      rounded-2xl 
      bg-black/80 backdrop-blur-xl
      border border-white/10
      px-8 py-6
      shadow-[0_20px_45px_rgba(0,0,0,0.6)]
      items-center flex md:items-center justify-between gap-4 flex-col md:flex-row">
        <div className="cursor-pointer"
        onClick={()=>navigate("/")}>
         <h1 className="text-2xl font-bold
        bg-linear-to-r from-white via-gray-300 to-white
        bg-clip-text text-transparent">ExamNotes AI</h1>
        <p className="text-sm text-gray-300 mt-1">AI-powered exam-oriented notes & revision tools</p>

        </div>


        <div className="flex items-center gap-4">
          <button   onClick={()=> navigate("pricing")}
          className="flex items-center gap-2 
          px-4 py-2 rounded-full bg-white/10 border border-white/20
          text-white text-small">
            <span>💠</span>
                <span>{credits}</span>
                <motion.span whileHover={{scale:1.2}} whileTap={{scale:0.97}}
                className="ml-2 flex items-center justify-center h-5 w-5 rounded-full bg-white 
                text-black text-xs text-black font-bold">
                    ➕
                    
                    </motion.span>
          </button>

          <button
  className="px-4 py-3 rounded-full
    text-sm font-medium
    bg-white/10
    border border-white/20
    text-white
    hover:bg-white/20
    transition
    flex items-center gap-2"
>
  📚 Your Notes
</button>
        </div>

        
      </motion.header>
      
    </div>
  )
}
