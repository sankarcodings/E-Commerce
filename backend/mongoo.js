const mongoose = require("mongoose")
const newSchema=new mongoose.Schema({
        email:String,
        pwd:String,
        date:String
})


const collection = mongoose.model("SignedUsers",newSchema)

module.exports=collection
