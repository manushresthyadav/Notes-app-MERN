const express=require('express')
const notes=require('./data/notes.js')
const app=express()
app.get('/',(req,res)=>{
    res.send('Success')
})
app.get('/api/notes',(req,res)=>{
res.json(notes)
})
// creating server 
app.listen(5000,console.log('server started at port 5000'))