const mongoose = require('mongoose');

const collection = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'title'
    }],
    questions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'question'
    }]

})

const catagorymodel = mongoose.model('catagory',collection);


module.exports = catagorymodel;