const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')
const user=require('../models/userModel')
// it will protect the notes from unauthorized  
const protect=asyncHandler(async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
        token=req.headers.authorization.split(" ")[1]
        //decodes toekn 
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=await user.findById(decoded.id).select('.password')
        next()
        }
        catch(error){
                res.status(401)
                throw new Error('Not authorized,token failed!')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized,no token!')
    }

})
module.exports={protect}