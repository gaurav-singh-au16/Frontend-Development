const express = require("express")
const fs = require("fs")
const exphbs  = require('express-handlebars')
const db = require("./db/data.json")
const app = express()
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.engine('handlebars', exphbs({
    extname: "hbs",
    defaultLayout: false
  }))
app.set('view engine', 'handlebars')

app.get("/signup", (req, res)=>{
    res.render("signupPage")
})

app.get("/login", (req, res)=>{
    console.log("Received Request")
    res.render("loginPage")
    
})
app.post("/welcome", (req, res)=>{
    console.log("Received Request")
    console.log("hello")
    const {email, password} = req.body
    
    for (let i = 0; i < db.length; i++){
        if (email == db[i].email && password == db[i].password){
            res.render("welcomePage")
        }
    }
    
    
})
app.post("/sucessfull", (req, res)=>{
    console.log("Received Request")
    const {name, username, email, number, password} = req.body
    const newData = {
        "name": name,
        "userName" : username,
        "email" : email,
        "number" : number,
        "password" : password
    }
    
    db.push(newData)
    fs.writeFile("./db/data.json", JSON.stringify(db, null, 4), (err) => {
        if (err)
          console.log(err);
        else {
          res.render("sucessfull", newData)
        }
    })

})

app.listen(3000, ()=>{
    console.log("Server Started")
})