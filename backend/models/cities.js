const mongoose = require('mongoose')

const citiesSchema = new mongoose.Schema({
    image:{type:String, required:true},
    name:{type:String, required:true},
    ciudad:{type:String, required:true},
    description:{type:String, required:true}
})

const Cities = mongoose.model('cities', citiesSchema)
module.exports = Cities