const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new Schema({
name: {
    type: String
},
name: String,
category: {
    type: String,
    enum: ['chinese','italian','american','japanese','greek','thai','mexican','indian']
},
rating:{
    type: Number,
    default: 0
},
comment:{
type: String
}


})

module.exports = mongoose.model("Food", foodSchema)