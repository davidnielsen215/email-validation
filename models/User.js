const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: 'string',
        required: 'true'
    },
    num: {
        type: 'number'
    },
    date: {
        type: Date,
        default: Date.now
    }, 
    isValidated: {
        type: Boolean,
        default: false
    }
})

module.exports = User = mongoose.model('user', UserSchema)