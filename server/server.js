const express = require('express')
const app = express()
const mongoose= require('mongoose')
mongoose.set('strictQuery', true)
const morgan = require('morgan')

//Middleware
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb+srv://domniea:password666@cluster-bands.ygk1xtq.mongodb.net/utah?retryWrites=true&w=majority', () => {
    console.log('Connected to Atlas!')
})

//Routes
app.get('/', (req, res, next) => {
    res.send('HomePage')
})

app.use('/bands', require('./routes/bandRouter'))

//Error Handeling
app.use((err, req, res, next) => {
    return res.send({errMsg: err})
})

//LocalRouter
app.listen(9000, () => {
    console.log(`Successfully listening on port: ${9000}`)
})
