const mongoose = require('mongoose');

const collection = new mongoose.Schema({
    qname:{
        type:String,
    },
    answer:{
        type:String
    },
    photo:{
        type:String
    },
    catagory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'catagory',
    },
    title:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'title'
    }
})

const questionmodel = mongoose.model('question',collection);


module.exports = questionmodel;