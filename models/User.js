const mongoose = require ('mongoose')
const UserSchema= mongoose.Schema({
    name:{type : String},
    email:{type : String},
    age : Number
})

module.exports= User = mongoose.model('user',UserSchema )