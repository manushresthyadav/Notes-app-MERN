const note=require('../models/notesModel')
const asyncHandler=require('express-async-handler')
const getNotes=asyncHandler(async(req,res)=>{
     const notes=await note.find()
     res.json(notes)
})
const createNotes=asyncHandler(async(req,res)=>{

})
module.exports={getNotes,createNotes}