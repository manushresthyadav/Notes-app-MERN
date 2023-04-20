const express=require('express');
const { registerUser, authUser } = require('../controllers/userControllers');
const router=express.Router()
// register 
router.route('/').post(registerUser)
// login
router.route('/login').post(authUser)
module.exports=router;