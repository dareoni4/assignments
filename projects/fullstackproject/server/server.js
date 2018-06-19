const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))


mongoose.connect('mongodb://localhost/foodrater', (err) => {
    if(err) throw err
    console.log("connected to database")
})
app.use('/resturaunts', require('./routes/resturaunts'))

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})