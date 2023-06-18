const express = require('express')
const app = express()
require('dotenv').config()
const mongoose= require('mongoose')
mongoose.set('strictQuery', true)
const morgan = require('morgan')

//Middleware
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(`${process.env.ATLAS_URI}`, () => {
    console.log("Connected to DB");
  });

//Routes
app.get('/', (req, res, next) => {
    res.send('HomePage')
})
app.get('/test', (req, res, next) => {
    res.send('test')
})

app.use('/bands', require('./routes/bandRouter'))

//Error Handeling
app.use((err, req, res, next) => {
    return res.send({errMsg: err})
})

//LocalRouter
app.listen(process.env.PORT || 9000, () => {
    console.log(`Successfully listening on port: ${process.env.PORT}`)
})
