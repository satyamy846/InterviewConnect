const mongoose = require('mongoose');

const collection = new mongoose.Schema({
    tagname:{
        type:String,
        required:true
    },
    level:{
        type: String,
    },
    questions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'question'
    }],
    catagory:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'catagory'
    }]
});

const titlemodel = mongoose.model('title',collection);


module.exports = titlemodel;