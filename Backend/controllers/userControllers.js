const asyncHandler=require('express-async-handler')
const user=require('../models/userModel');
const generateToken = require('../utils/generateToken');
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
            pic:newUser.pic,
            token:generateToken(newUser.id)
         })
    }
    else{
        res.status(400)
        throw new Error('Error occured while creating user!')
    }
    res.json({name,email})
})
//auth user 
const authUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const userExists=await user.findOne({email})
    if(userExists && (await userExists.matchPassword(password))){
        // return the data
        res.json({
            id:userExists.id,
            name:userExists.name,
            email:userExists.email,
            isAdmin:userExists.isAdmin,
            pic:userExists.pic,
            token:generateToken(userExists.id),
        })
    }
    else{
        res.status(400)
        throw new Error('Email or Password is incorrect')
    }
})
//update user profile 
const updateUserProfile=asyncHandler(async(req,res)=>{
    // id coming from middleware protect 
    const User=await user.findById(req.user._id)
    if(User){
        User.name=req.body.name||User.name
        User.email=req.body.email||User.email
        User.pic=req.body.pic||User.pic

        if(req.body.password){
            User.password=req.body.password
        }
        const updatedUser=await User.save()
        res.json({
            _id:updatedUser._id,
            name:updatedUser.name,
            email:updatedUser.email,
            pic:updatedUser.pic,
            token:generateToken(updatedUser.token),
        })
    }
    else{
        res.status(404)
        throw new Error('User not found!')
    }
})
module.exports={registerUser,authUser,updateUserProfile}