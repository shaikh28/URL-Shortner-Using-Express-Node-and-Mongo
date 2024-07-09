const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
   sortId :{ type:String,
    required:true,
    unique:true},
    redirectUrl:{
        type:String,
        required:true
    },
    visitHistory:[{timestamp:{type:Number}}]
})

const URL = mongoose.model("url",urlSchema)
module.exports = URL;