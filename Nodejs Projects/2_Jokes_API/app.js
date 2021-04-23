const express = require("express")
const app = express()

app.use(express.static("Public"))
app.use(express.urlencoded({extended:true}))

app.get("/randomJokes" , (req, res)=>{
    console.log("Received Request")
    res.sendFile(__dirname + "/Public/jokes.html")

})

app.listen(3000, ()=>{
    console.log("Server Started")
})