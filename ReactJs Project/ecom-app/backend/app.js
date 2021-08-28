const express = require('express')
const app = express()
const mongoose = require('mongoose')    
app.use(express.json())
require('dotenv').config()
const cors = require('cors')

app.use(
    cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }))

const { DATABASE } = process.env

mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err) throw err
    console.log('MONGO DB DataBase Connected')
})

app.use(express.urlencoded({extended:false}))

const taskRoutes = require("./routes/task")
const userRoutes = require("./routes/user")

app.use("", taskRoutes)
app.use("", userRoutes)


app.listen(process.env.PORT || 3001, ()=>{
    console.log("Server Started @ 3001")
})