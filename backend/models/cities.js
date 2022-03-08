const mongoose = require('mongoose')

const citiesSchema = new mongoose.Schema({
    image:{type:String, required:true},
    name:{type:String, required:true},
    ciudad:{type:String, required:true},
    description:{type:String, required:true},
    flag:{type:String, required:true},
    language:{type:String, required:true},
    hotels:{type:String, required:true},
    restaurants:{type:String, required:true},
    hospitals:{type:String, required:true},
    Itinerarios:[{type: mongoose.Schema.Types.ObjectId, ref: 'itinerarios'}]

})

const Cities = mongoose.model('cities', citiesSchema)
module.exports = Cities