const express=require('express')
const dotenv=require('dotenv')
const notes=require('./data/notes.js')
const bodyParser=require('body-parser')
const cors=require('cors')
const connectDb=require('./config/db.js')
const app=express()
const notesRoutes=require('./routes/notesRoutes.js')
const userRoutes=require('./routes/userRoutes.js')
const { notFound, errorHandler } = require('./middlewares/ErrorHandlers.js')
const path=require('path')
dotenv.config();
//db
connectDb()
//to accept json data 
app.use(express.json())
//middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

// app.get('/api/notes',(req,res)=>{
// res.json(notes)
// })
// app.get('/api/notes/:id',(req,res)=>{
//     const note=notes.find((n)=>n._id===req.params.id)
//     // console.log(req.params)
//     res.json(note)
// })
//user route->lofgin,register
app.use('/api/users',userRoutes)
//notes route-crud
app.use('/api/notes',notesRoutes)

app.use(notFound)
app.use(errorHandler)
// creating server 
const PORT=process.env.PORT || 5000;
app.listen(PORT,console.log(`server started at PORT ${PORT}`))