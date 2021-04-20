const express = require("express")
const fs = require("fs")
const exphbs  = require('express-handlebars')
const db = require("./db/data.json")
const app = express()
app.use(express.urlencoded({extended: true}))
app.engine('handlebars', exphbs({
    extname: "hbs",
    defaultLayout: false
  }))
app.set('view engine', 'handlebars')

app.get("/", (req, res)=>{
    console.log("Received Request")
    res.render("home")
})
app.post("/dog", (req, res)=>{
    console.log("Received Request")
    const {name, age, breed, height, weight, ownerName} = req.body
    const newData = {
        "name": name,
        "age" : age,
        "breed" : breed,
        "height" : height,
        "weight" : weight,
        "ownerName" : ownerName
    }
    
    db.push(newData)
    fs.writeFile("./db/data.json", JSON.stringify(db, null, 4), (err) => {
        if (err)
          console.log(err);
        else {
          res.render("dog", newData)
        }
    })

})

app.listen(3000, ()=>{
    console.log("Server Started")
})