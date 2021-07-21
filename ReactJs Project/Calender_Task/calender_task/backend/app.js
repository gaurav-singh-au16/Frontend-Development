const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())

app.use(
    cors({
    origin: 'http://localhost:3001',
    credentials: true,
  }))
app.use(express.urlencoded({extended:false}))


app.post("/node", (req, res) => {
    console.log(req.body)
    
})


app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server Started @ 3000")
})