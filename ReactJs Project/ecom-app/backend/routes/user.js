const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const session = require('express-session')
const UserModel = require("../models/user")


router.use(session({
    secret: "calendar",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 9000000
    }
}))


router.post("/signup", async(req, res) => {

    const { name, email, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash((req.body).password, salt)
    signUpData = {
        name,
        email,
        password: hashedPassword
    }
    
    try {
        const newUserDoc = new UserModel(signUpData)

        const savedUserDoc = await newUserDoc.save()

        req.session.isLoggedIn = true

        
        res.status(202).json({Sucess:'sucessfull'})
    } catch (error) {
        console.log(error)
        res.status(400).json({error:'Some error'})
    }


})
router.post("/login", async(req, res) => {
    const { email, password } = req.body
    console.log(req.body)
    var foundUser = await UserModel.findOne({ email })
    if (foundUser == null) {
        let err = {
            error: "Email Not Exist"
        }
        console.log(err)
        res.send(err)
    }
    const isMatching = await bcrypt.compare(password, foundUser.password)


    if (foundUser != null && isMatching == true) {

        req.session.isLoggedIn = true
        req.session.user = foundUser
        console.log("Verified User")

        res.send(foundUser)

    }
    else {
        let err = {
            error: "Incorrect Password!!!"
        }
        console.log(err)
        res.send(err)
    }
})


module.exports = router