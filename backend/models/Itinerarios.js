const mongoose = require('mongoose')

const itinerariosSchema = new mongoose.Schema({
    image:{type:String, required:true},
    name:{type:String, required:true},
    price:{type:String, required:true},
    duration:{type:String, required:true},
    likes:{type:String, required:true},
    hashtags:{type:String, required:true},
    comments:{type:String, required:true}, 

})

const Iti = mongoose.model('itinerarios', itinerariosSchema)
module.exports = Iti