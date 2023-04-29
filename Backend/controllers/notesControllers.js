const note=require('../models/notesModel')
const asyncHandler=require('express-async-handler')
const user = require('../models/userModel')
//getting all notes of user
const getNotes=asyncHandler(async(req,res)=>{
     const notes=await note.find({user:req.user.id})
     res.json(notes)
})
//creating note by given info
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
//getting single note by id 
const getNoteById=asyncHandler(async(req,res)=>{
     const Note=await note.findById(req.params.id)
     if(Note){
               res.json(Note)
     }
     else{
               res.status(404).json({message:'Note not found!'})
     }
})
//update note
const updateNote=asyncHandler(async(req,res)=>{
          const {title,content,category}=req.body
          const Note=await note.findById(req.params.id)
          // checking this note belongs to the logined user or not 
          if(Note.user.toString()!==req.user.id.toString()){
                    throw new Error('You can not perform this action!')
          }
          // it means the user is verified now we just need to update 
         if(Note){
          Note.title=title
          Note.content=content
          Note.category=category
          //saving in db
          const updatedNote=await Note.save()
          res.json(updatedNote)
     }
     //user is verified but note not found
     else{
          throw new Error('Note not found!')
     }
})
//deleting note 
const deleteNote=asyncHandler(async(req,res)=>{
     const Note=await note.findById(req.params.id)
     if(Note.user.toString()!==req.user.id.toString()){
          throw new Error('You can not delete this note!')
     }
     if(Note){
          await note.deleteOne()
          res.json({message:'Note deleted!'})
     }
     else{
          res.status(404)
          throw new Error('Note not found!')
     }
})
module.exports={getNotes,createNotes,getNoteById,updateNote,deleteNote}