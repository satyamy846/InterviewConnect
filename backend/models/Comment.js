const mongoose = require('mongoose');

const collection = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    question:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'question'
    },
    catagory:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'catagory'
    }
})

const commentmodel = mongoose.model('comment',collection);


module.exports = commentmodel;