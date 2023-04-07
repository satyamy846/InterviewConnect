const mongoose = require('mongoose');

const collection = new mongoose.Schema({
    tag:{
        type:String,
        required:true
    },
    qname:{
        type:String,
    },
    answer:{
        type:String
    },
    photo:{
        type:String
    },
    admin:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'admin'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    catagory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'catagory',
    }
})

const questionmodel = mongoose.model('question',collection);


module.exports = questionmodel;