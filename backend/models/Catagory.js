const mongoose = require('mongoose');

const collection = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    question:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'question'
    }

})

const catagorymodel = mongoose.model('catagory',collection);


module.exports = usermodel;