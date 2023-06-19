const express = require('express')
const bandRouter = express.Router()
const Band = require('../models/band')

//GET All
bandRouter.get('/', (req, res, next) => {
    Band.find((err, bands) => {
        if(err) {
            res.sendStatus(500)
            return next(err)
        }
        return res.status(200).send(bands)
    })
})

//GET One
bandRouter.get('/:bandId', (req, res, next) => {
    Band.findOne(
        { _id: req.params.bandId},
        (err, band) => {
        if(err) {
            res.sendStatus(500)
        }
        return res.status(200).send(band)
    })
})

//POST
bandRouter.post('/', (req, res, next) => {
    const newBand = new Band(req.body)
    newBand.save((err, data) => {
        if(err) {
            res.sendStatus(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

//PUT
bandRouter.put('/:bandId', (req, res, next) => {
    Band.findOneAndUpdate(
        {_id: req.params.bandId},
        req.body,
        {new: true},
        (err, update) => {
        if(err) {
            res.sendStatus(500)
        }
        return res.status(200).send(update)
    })
})

//DELETE
bandRouter.delete('/:bandId', (req, res, next) => {
    Band.findOneAndDelete(
        { _id: req.params.bandId},
        (err, deletedItem) => {
        if(err) {
            res.sendStatus(500)
        }
        return res.status(200).send(deletedItem)
    })
})

module.exports = bandRouter
