const mongoose = require('mongoose')
const schema2=new mongoose.Schema(
    {
        email:String,
        pwd:String
    }
) 

const collection2 = mongoose.model('Loginusers',schema2)
module.exports = collection2