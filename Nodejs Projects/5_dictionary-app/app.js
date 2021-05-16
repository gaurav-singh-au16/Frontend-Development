const express = require("express")
const app = express()
const exphbs = require('express-handlebars')
const axios = require('axios')

app.use(express.static("style"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: false
}));
app.set('view engine', '.hbs')


app.get("/", (req, res) => {
    console.log("HomePage Started")
    res.render("homePage")
})
app.get("/hindi", (req, res) => {
    console.log("Hindi Page Started")
    res.render("hindi")
})

app.post("/", async (req, res) => {
    const { word } = req.body

    try {
        const instance = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
        let audio = await instance.data[0]["phonetics"][0]["audio"]
        let definition = await instance.data[0]["meanings"][0]["definitions"][0]["definition"]
        let synonyms = await instance.data[0]["meanings"][0]["definitions"][0]["synonyms"]
        let example = await instance.data[0]["meanings"][0]["definitions"][0]["example"]

        const data = {
            word,
            audio: audio,
            definition: definition,
            synonyms: synonyms,
            example: example
        }
        // globalData = data
        
        res.render("homePage", data)
    } catch (error) {
        let error_msg = {
            msg: "No Such Word Found In Dictionary, Please Retry With New Word"
        }

        res.render("homePage", error_msg)
    }

})

app.post("/hindi", async (req, res) => {
    const { word } = req.body

    try {
        const instance = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/hi/${word}`);
        let audio = await instance.data[0]["phonetics"][0]["audio"]
        let definition = await instance.data[0]["meanings"][0]["definitions"][0]["definition"]
        let synonyms = await instance.data[0]["meanings"][0]["definitions"][0]["synonyms"]
        let example = await instance.data[0]["meanings"][0]["definitions"][0]["example"]

        const data = {
            word,
            audio: audio,
            definition: definition,
            synonyms: synonyms,
            example: example
        }
        // globalData = data
        
        res.render("hindi", data)
    } catch (error) {
        let error_msg = {
            msg: "No Such Word Found In Dictionary, Please Retry With New Word"
        }

        res.render("hindi", error_msg)
    }

})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server Started")
})