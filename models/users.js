const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:[{type:String, required:true}],
    profile:{type:String, required:true},
    uniqueString:{type:String, required:true},
    emailVerified:{type:Boolean, required:true},
    country:{type:String, required:true},
    from:{type:Array}

})

const User = mongoose.model('users', userSchema)

module.exports = User