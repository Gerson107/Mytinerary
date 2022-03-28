const mongoose = require('mongoose')

const itinerariosSchema = new mongoose.Schema({
    image:{type:String, required:true},
    imagen:{type:String, required:true},
    name:{type:String, required:true},
    price:{type:String, required:true},
    duration:{type:String, required:true},
    autor: [{type: mongoose.Types.ObjectId, ref:"users"}],
    likes:{type: Array},
    hashtags:{type:String, required:true},
    comments:[

        {   date:{ type: Date},
            userId:{ type: mongoose.Types.ObjectId, ref: 'users'},
            profile:{type:String},
            comentary: {type:String},
            name: {type:String}
        }
    ], 
})

const Iti = mongoose.model('itinerarios', itinerariosSchema)
module.exports = Iti