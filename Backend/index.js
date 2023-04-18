const express=require('express')
const dotenv=require('dotenv')
const notes=require('./data/notes.js')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
dotenv.config();
//middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())


app.get('/',(req,res)=>{
    res.send('Success')
})
app.get('/api/notes',(req,res)=>{
res.json(notes)
})
app.get('/api/notes/:id',(req,res)=>{
    const note=notes.find((n)=>n._id===req.params.id)
    // console.log(req.params)
    res.json(note)
})
// creating server 
const PORT=process.env.PORT || 5000;
app.listen(PORT,console.log(`server started at PORT ${PORT}`))