import JWT from "jsonwebtoken"

export const  requireSign=async(req,res,next)=>{
    try {
        const decode=JWT.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user=decode;
        next();
        
    } catch (error) {
        console.log(error)
        
    }

}


export const testController=async(req,res)=>{
    res.status(200).send("Protected route")

}