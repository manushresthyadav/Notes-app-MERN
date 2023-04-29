const express=require('express')
const {getNotes, getNoteById, updateNote, deleteNote} = require('../controllers/notesControllers')
const {createNotes} = require('../controllers/notesControllers')
const { protect } = require('../middlewares/authMiddleware')
const router=express.Router()
router.route('/').get(protect,getNotes)
router.route('/create').post(protect,createNotes)
// gettig one single note by routing /api/notes/:id->get  
//updating note by routing /api/notes/:id->put
// /deleting note by routing /api/notes/:id->del 
router.route('/:id').get(getNoteById).put(protect,updateNote).delete(protect,deleteNote)

module.exports=router