const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.static("script"))
app.use(express.static("style"))

app.get("/", (req, res) => {
    console.log("Received Request")
    res.sendFile(__dirname + "/public/tic_tac_toe.html")
})

app.listen(3000, () => {
    console.log("Server Started")
})