const gemini_API="https://generativelanguage.googleapis.com/v1beta/interactions" 

export const generateGeminiResponse = async (prompt)=>{

    try{
         const response =await fetch(`${gemini_API}?key=${process.env.GEMINI_API_KEY}`,{
        method:"POST",
        headers:{
            "Context-Type":"application/json"
        },
        body:JSON.stringify({
            contents:[
                {
                    parts:[
                        {
                            text:prompt
                        }
                    
                ]
                }
            ]
        })
    })

    if(!response.ok){
        const err =await response.text();
        throw new Error(err)
    }

    const data = await response.json()

    const text=
    data.candidates?.[0]?.content?.parts?.[0]?.text;

    if(!text){
        throw new Error("No text returned from gemini")
    }

    const cleanText =text
    .replace(/```json/g,"")
    .replace(/```/g,"")
    .trim();

    return JSON.parse(cleanText);


    }catch(error){
        console.error("gemini fetch error:",error.message);
        throw new error("Gemini API fetch failed")

    }
}
   