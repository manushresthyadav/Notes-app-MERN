const express=require('express');
const { registerUser, authUser } = require('../controllers/userControllers');
const router=express.Router()
// register 
router.route('/').post(registerUser)
// login
router.post('/login',authUser)
module.exports=router;