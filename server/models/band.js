const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bandSchema = new Schema({
    name:{
        type: String
    },
    city: {
        type: String
    },
    genre: {
        type: [String]
    },
    facebookURL: {
        type: String
    },
    spotifyURL: {
        type: String
    },
    bandcamp: {
        type: String
    },
    soundcloudURL: {
        type: String
    },
    email: {
        type: String
    }
})

module.exports = mongoose.model('Band', bandSchema)
