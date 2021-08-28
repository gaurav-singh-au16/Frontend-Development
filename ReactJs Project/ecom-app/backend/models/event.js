const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userLoginData'
    },
    date: String,
    event: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const EventModel = mongoose.model('eventData', EventSchema)

module.exports = EventModel