const mongoose = require('mongoose')

const studentApplyFaqSchema = mongoose.Schema({
    title: String,
    body: String,
})

module.exports = mongoose.model('studentFaqApply', studentApplyFaqSchema)