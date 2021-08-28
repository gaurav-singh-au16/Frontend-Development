const express = require("express")
const cors = require('cors')
const router = express.Router()
const EventModel = require("../models/event")

router.use(
    cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }))

router.get("/", async(req, res) => {
    if (req.session.isLoggedIn) {
        await EventModel.find({}, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send({ result })
            }
        }).lean()

    }
})

router.post("/event", async(req, res) => {
    console.log(req.body)
    let data = await EventModel.create([{
        userId: req.session.user._id,
        date: req.body.date,
        event: req.body.events,
    }])
    
})

module.exports = router