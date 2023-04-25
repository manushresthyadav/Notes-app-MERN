const express=require('express')
const {getNotes} = require('../controllers/notesControllers')
const {createNotes} = require('../controllers/notesControllers')
const { protect } = require('../middlewares/authMiddleware')
const router=express.Router()
router.route('/').get(protect,getNotes)
router.route('/create').post(createNotes)
// update one single note 
// router.route('/:id').get().put().delete()  

module.exports=router