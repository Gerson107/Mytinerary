const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    image:{type:String, required:true},
    title:{type:String, required:true},
    text:{type:String, required:true},
    itineraryId: {type: mongoose.Types.ObjectId, ref: "itinerarios"}
})

const Act = mongoose.model('activities', ActivitySchema)

module.exports = Act