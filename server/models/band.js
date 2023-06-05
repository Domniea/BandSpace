const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bandSchema = new Schema({
    name:{
        type: String
    },
    city: {
        type: String
    },
    facebookURL: {
        type: String
    },
    email: {
        type: String
    }
})

module.exports = mongoose.model('Band', bandSchema)                                                                                                                                                                                                    