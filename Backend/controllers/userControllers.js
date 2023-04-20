const asyncHandler=require('express-async-handler')
const user=require('../models/userModel')
const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password,pic}=req.body;
    //already exists
    const userExists=await user.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User already exists!')
    }
    //not existing 
    const newUser=await user.create({name,email,password,pic})
    //successfully created
    if(user){
         res.status(201).json({
            id:newUser.id,
            name:newUser.name,
            email:newUser.email,
            isAdmin:newUser.admin,
            pic:newUser.pic
         })
    }
    else{
        res.status(400)
        throw new Error('Error occured while creating user!')
    }
    res.json({name,email})
})

module.exports={registerUser}