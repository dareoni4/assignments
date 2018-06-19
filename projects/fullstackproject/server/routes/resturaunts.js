const express = require('express')
const foodRouter = express.Router()
const Food = require('../model/resturaunts')

foodRouter.get('/', (req, res) => {
    Food.find((err,foods) => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(foods)
    })
})

foodRouter.post('/', (req, res) => {
    const food = new Food(req.body)
    food.save((err, newFood) => {
        if(err) return res.status(500).send(err)
        return res.status(201).send(newFood)
    })
})

foodRouter.put('/:id', (req, res) => {
    Food.findByAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updateFood) => {
            if(err) return res.status(500).send(err)
            return res.send(updateFood)
        }
    )
})

foodRouter.delete('/:id', (req, res) => {
    Food.findOneAndRemove(req.params.id, (err, deleteFood) => {
        if(err) return res.status(500).send(err)
        return res.send({ message: "resturaunt is successfully deleted", deleteFood})
    })
})
module.exports = foodRouter