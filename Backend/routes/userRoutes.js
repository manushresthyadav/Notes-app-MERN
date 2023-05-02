const express=require('express');
const { registerUser, authUser, updateUserProfile } = require('../controllers/userControllers');
const { protect } = require('../middlewares/authMiddleware');
const router=express.Router()
// register 
router.route('/').post(registerUser)
// login
router.route('/login').post(authUser)
//profile user
router.route('/profile').post(protect,updateUserProfile)
module.exports=router;