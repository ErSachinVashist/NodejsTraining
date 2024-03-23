const mongoose = require('mongoose')
const { Schema } = mongoose

const commentSchema = new Schema({
    name: {
        type: String,
    },
    email: String,
    text: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Comments', commentSchema)