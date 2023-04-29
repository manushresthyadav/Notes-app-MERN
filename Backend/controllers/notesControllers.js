const note=require('../models/notesModel')
const asyncHandler=require('express-async-handler')
const getNotes=asyncHandler(async(req,res)=>{
     const notes=await note.find({user:req.user.id})
     res.json(notes)
})
const createNotes=asyncHandler(async(req,res)=>{
      const {title,content,category}=req.body
      if(!title || !category || !content){
          res.status(400)
          throw new Error('Please fill all the fields')
      }
      else{
          const newNote=new note({user:req.user.id,title,content,category})
          const createdNote=await newNote.save()
          res.status(201).json(createdNote)
      }
})
module.exports={getNotes,createNotes}